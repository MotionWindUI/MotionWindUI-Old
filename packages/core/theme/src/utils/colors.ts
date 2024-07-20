import Color from "color";
import { ColorScale, ColorShades } from "../colors/types";

/**
 * Converts a hex color into an HSL CSS string in the format of `hdeg s% l%` to be used by Tailwind CSS.
 *
 * @param hex The hex color to convert
 * @returns The HSL CSS string
 */
export const hexToHslCssStr = (hex: string): string => {
    const { h, s, l } = Color(hex).hsl().object();
    // Round the values to the nearest whole number
    const hRounded = Math.round(h);
    const sRounded = Math.round(s);
    const lRounded = Math.round(l);

    return `${hRounded}deg ${sRounded}% ${lRounded}%`;
};

/**
 * Converts a hex color scale into an HSL CSS scale to be used by Tailwind CSS.
 *
 * @param colorScale The color scale to convert
 * @returns The HSL CSS scale
 */
export const hexColorScaleToHslCssScale = (
    colorScale: ColorScale,
): ColorScale => {
    if (typeof colorScale === "string") {
        return hexToHslCssStr(colorScale);
    }

    const convertedScale: Partial<ColorShades> = {};

    Object.keys(colorScale).forEach((shade) => {
        // Convert to unknown to avoid TypeScript error. We know that the shade is a key of ColorShades.
        const hexValue = colorScale[shade as unknown as keyof ColorShades];
        if (hexValue) {
            convertedScale[shade] = hexToHslCssStr(hexValue);
        }
    });

    return convertedScale;
};

export const colorScaleToCssVars = (
    colorName: string,
    colorScale: ColorScale,
    dropSpaceFunction: boolean,
    valueAsCssVar: boolean = false,
): Record<string, string> => {
    // If the color scale is a string, return the color name as the CSS variable
    if (typeof colorScale === "string") {
        return {
            [`--${colorName}`]: colorScale,
        };
    }

    // Convert the color scale to CSS variables
    const cssVars: Record<string, string> = {};

    Object.keys(colorScale).forEach((shade) => {
        const colorValue = colorScale[shade as unknown as keyof ColorShades];
        if (colorValue) {
            const cssVarName = `--${colorName}-${shade}`;
            let varValue: string;

            if (valueAsCssVar) {
                varValue = `var(${cssVarName})`;
            } else {
                varValue = dropSpaceFunction
                    ? hexToHslCssStr(colorValue)
                    : colorValue;
            }

            cssVars[cssVarName] = varValue;
        }
    });

    return cssVars;
};
