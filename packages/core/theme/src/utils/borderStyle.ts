/**
 * Used for when the borders need to overlap with each other. Taken from
 * https://github.com/nextui-org/nextui/blob/canary/packages/core/theme/src/utils/classes.ts
 *
 * :heart: NextUI
 */
export const collapsedBorderStyle = {
  neutral: ["[&+.border.border-neutral]:ms-[calc(theme(borderWidth.md)*-1)]"],
  primary: ["[&+.border.border-primary]:ms-[calc(theme(borderWidth.md)*-1)]"],
  secondary: ["[&+.border.border-secondary]:ms-[calc(theme(borderWidth.md)*-1)]"],
  success: ["[&+.border.border-success]:ms-[calc(theme(borderWidth.md)*-1)]"],
  warning: ["[&+.border.border-warning]:ms-[calc(theme(borderWidth.md)*-1)]"],
  danger: ["[&+.border.border-danger]:ms-[calc(theme(borderWidth.md)*-1)]"],
};
