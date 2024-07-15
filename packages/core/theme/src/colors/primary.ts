import { ColorScale, STYLE_TOKENS, Tokens, VALUES_KEYWORD } from "./types";

const PRIMARY_KEY = "primary";

/**
 * Get the primary color scale.
 *
 * @param tokens The theme tokens object
 * @returns The primary color scale
 */
export function primary(tokens: Tokens): ColorScale {
    const primary = tokens[STYLE_TOKENS][PRIMARY_KEY][VALUES_KEYWORD];

    return {
        "50": primary["50"],
        "100": primary["100"],
        "200": primary["200"],
        "300": primary["300"],
        "400": primary["400"],
        "500": primary["500"],
        "600": primary["600"],
        "700": primary["700"],
        "800": primary["800"],
        "900": primary["900"],
        "950": primary["950"],
    };
}
