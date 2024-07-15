import { STYLE_TOKENS, ColorScale, Tokens, VALUES_KEYWORD } from "./types";

const WARNING_KEY = "warning";

/**
 * Get the warning color scale.
 *
 * @param tokens The theme tokens object
 * @returns The warning color scale
 */
export function warning(tokens: Tokens): ColorScale {
    const warning = tokens[STYLE_TOKENS][WARNING_KEY][VALUES_KEYWORD];

    return {
        "50": warning["50"],
        "100": warning["100"],
        "200": warning["200"],
        "300": warning["300"],
        "400": warning["400"],
        "500": warning["500"],
        "600": warning["600"],
        "700": warning["700"],
        "800": warning["800"],
        "900": warning["900"],
        "950": warning["950"],
    };
}
