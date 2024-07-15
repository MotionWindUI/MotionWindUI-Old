import { ColorScale, STYLE_TOKENS, Tokens, VALUES_KEYWORD } from "./types";

const NEUTRAL_KEY = "neutral";

/**
 * Get the neutral color scale.
 *
 * @param tokens The theme tokens object
 * @returns The neutral color scale
 */
export function neutral(tokens: Tokens): ColorScale {
    const neutral = tokens[STYLE_TOKENS][NEUTRAL_KEY][VALUES_KEYWORD];

    return {
        "50": neutral["50"],
        "100": neutral["100"],
        "200": neutral["200"],
        "300": neutral["300"],
        "400": neutral["400"],
        "500": neutral["500"],
        "600": neutral["600"],
        "700": neutral["700"],
        "800": neutral["800"],
        "900": neutral["900"],
        "950": neutral["950"],
    };
}
