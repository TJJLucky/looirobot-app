/**
 * globals.d.ts - 全局类型声明
 * 声明项目中需要 TypeScript 识别的全局类型
 */

/**
 * CSS 模块声明
 * 告诉 TypeScript，import xxx from './xxx.css' 是合法的
 * 这样可以在组件中导入 CSS 文件并获得类型提示
 */
declare module "*.css";
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "s-app-nav": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      "s-page": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          heading?: string;
          backButton?: { url: string };
          primaryButton?: { label: string; url: string; variant?: string };
        },
        HTMLElement
      >;
      "s-layout": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { sectioned?: boolean },
        HTMLElement
      >;
      "s-section": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          accessibilityLabel?: string;
          heading?: string;
          padding?: "base" | "none";
        },
        HTMLElement
      >;
      "s-stack": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          accessibilityLabel?: string;
          accessibilityRole?: string;
          accessibilityVisibility?: "visible" | "hidden" | "exclusive";
          alignItems?: string;
          background?: string;
          border?: string;
          borderColor?: string;
          borderRadius?: string;
          columnGap?: string;
          direction?: "inline" | "block" | string;
          display?: "auto" | "none" | string;
          gap?: string;
          inlineSize?: string;
          justifyContent?: string;
          padding?: string;
        },
        HTMLElement
      >;
      "s-card": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { title?: string },
        HTMLElement
      >;
      "s-data-table": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          headings: string[];
          rows: React.ReactNode[][];
          columnContentTypes?: string[];
        },
        HTMLElement
      >;
      "s-table": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          hasNextPage?: boolean;
          hasPreviousPage?: boolean;
          loading?: boolean;
          paginate?: boolean;
          variant?: "auto" | "list";
        },
        HTMLElement
      >;
      "s-table-header-row": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      "s-table-header": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          format?: "base" | "numeric" | "currency";
          listSlot?: "primary" | "secondary" | "kicker" | "inline" | "labeled";
        },
        HTMLElement
      >;
      "s-table-body": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      "s-table-row": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          clickDelegate?: string;
        },
        HTMLElement
      >;
      "s-table-cell": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
      "s-badge": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          color?: "base" | "strong";
          icon?: string;
          size?: "base" | "large" | "large-100";
          tone?:
            | "info"
            | "success"
            | "warning"
            | "critical"
            | "auto"
            | "neutral"
            | "caution";
        },
        HTMLElement
      >;
      "s-button": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          accessibilityLabel?: string;
          command?: "--auto" | "--show" | "--hide" | "--toggle";
          commandFor?: string;
          disabled?: boolean;
          download?: string;
          href?: string;
          icon?: string;
          inlineSize?: "auto" | "fill" | "fit-content";
          interestFor?: string;
          loading?: boolean;
          target?: "auto" | string | "_blank" | "_self" | "_parent" | "_top";
          tone?: "critical" | "auto" | "neutral";
          type?: "button" | "reset" | "submit";
          variant?: "auto" | "primary" | "secondary" | "tertiary";
        },
        HTMLElement
      >;
      "s-select": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          details?: string;
          disabled?: boolean;
          error?: string;
          icon?: string;
          id?: string;
          label?: string;
          labelAccessibilityVisibility?: "visible" | "exclusive";
          name?: string;
          placeholder?: string;
          required?: boolean;
          value?: string;
        },
        HTMLElement
      >;
      "s-option": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          defaultSelected?: boolean;
          disabled?: boolean;
          selected?: boolean;
          value?: string;
        },
        HTMLElement
      >;
      "s-option-group": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          disabled?: boolean;
          label?: string;
        },
        HTMLElement
      >;
      "s-text": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          accessibilityVisibility?: "visible" | "hidden" | "exclusive";
          color?: "base" | "subdued";
          dir?: "" | "auto" | "ltr" | "rtl";
          fontVariantNumeric?: "auto" | "normal" | "tabular-nums";
          interestFor?: string;
          tone?:
            | "info"
            | "success"
            | "warning"
            | "critical"
            | "auto"
            | "neutral"
            | "caution";
          type?: "strong" | "generic" | "address" | "redundant";
        },
        HTMLElement
      >;
      "s-link": React.DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
      >;
    }
  }
}

export {};
