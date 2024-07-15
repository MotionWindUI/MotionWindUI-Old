import { loadYaml } from "../utils/yaml";
import { success as successScale } from "./success";
import { warning as warningScale } from "./warning";
import { danger as dangerScale } from "./danger";
import { neutral as neutralScale } from "./neutral";
import { secondary as secondaryScale } from "./secondary";
import { primary as primaryScale } from "./primary";
import path from "path";
import { ThemeColors } from "./types";

/**
 * Load the design tokens. This is a YAML file that contains the design tokens including colors, typography, spacing, etc.
 * The design tokens are used for theming the components.
 *
 * Currently, the design tokens are loaded from the motionwindui-tokens.yaml file.
 */
const tokens = loadYaml(
    path.resolve(__dirname, "../../design-tokens/motionwindui-tokens.yaml"),
);

/**
 * Load in the default Motion Wind UI color scales.
 */
const neutral = neutralScale(tokens);
const primary = primaryScale(tokens);
const secondary = secondaryScale(tokens);
const success = successScale(tokens);
const warning = warningScale(tokens);
const danger = dangerScale(tokens);

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
