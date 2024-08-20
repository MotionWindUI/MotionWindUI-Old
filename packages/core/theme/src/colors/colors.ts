import { success as successScale } from "./success";
import { warning as warningScale } from "./warning";
import { danger as dangerScale } from "./danger";
import { neutral as neutralScale } from "./neutral";
import { secondary as secondaryScale } from "./secondary";
import { primary as primaryScale } from "./primary";
import { ThemeColors } from "./types";

/**
 * Load in the default Motion Wind UI color scales.
 */
const neutral = neutralScale();
const primary = primaryScale();
const secondary = secondaryScale();
const success = successScale();
const warning = warningScale();
const danger = dangerScale();

/**
 * Export the default Motion Wind UI color scales.
 */
export const themeColors: ThemeColors = {
  neutral: neutral,
  primary: primary,
  secondary: secondary,
  success: success,
  warning: warning,
  danger: danger,
};
