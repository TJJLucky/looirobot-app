# Project Guidelines

## Code Style

- Use TypeScript with `strict` mode assumptions (`tsconfig.json`).
- Keep route handlers in `app/routes/` thin: parse request/response in route, move business logic to services.
- Reuse shared types from `app/types/` and service DTO types instead of `any`.
- Follow existing naming patterns:
  - Service files: `*.service.ts` (example: `app/services/reseller-application.service.ts`)
  - Route files: React Router file-based naming in `app/routes/`
  - Prisma model files: domain-based files in `prisma/models/*.prisma`

## Architecture

- Respect layering:
  - Routes layer: `app/routes/` (HTTP boundary)
  - Service layer: `app/services/` (business logic)
  - Data access: `app/db.server.ts` + Prisma client
- Do not create new Prisma clients in feature code; import the singleton from `app/db.server.ts`.
- Keep Shopify app integration centralized in `app/shopify.server.ts`.

## Build and Test

- Use npm scripts from `package.json`:
  - `npm run dev`
  - `npm run build`
  - `npm run lint`
  - `npm run typecheck`
- Database scripts:
  - `npm run db:generate`
  - `npm run db:migrate`
  - `npm run db:push`
  - `npm run db:status`
- Production deploy expects `vercel.json` build flow (`npm run build && npx prisma db push`).

## Conventions

- Prisma uses multi-file schema under `prisma/`.
  - Keep `generator` and `datasource` only in `prisma/schema.prisma`.
  - Add domain models in `prisma/models/*.prisma`.
  - Use scripts that already include `--schema ./prisma`.
- For `/app` routes, keep Shopify auth pattern consistent with existing route loaders.
- In API routes, keep response envelopes consistent (`success`, `data`, `error`, `message`) where applicable.
- Prefer linking to detailed docs instead of duplicating them:
  - `doc/ARCHITECTURE.md`
  - `doc/PROJECT_STRUCTURE.md`
  - `doc/VERCEL_DEPLOYMENT.md`
  - `prisma/README.md`

## Avoid

- Do not put complex business logic directly in route files.
- Do not edit generated output under `build/`.
- Do not bypass npm scripts for Prisma operations unless debugging a specific issue.
