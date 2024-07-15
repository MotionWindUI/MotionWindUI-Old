import { STYLE_TOKENS, ColorScale, Tokens, VALUES_KEYWORD } from "./types";

const SUCCESS_KEY = "success";

/**
 * Get the success color scale.
 *
 * @param tokens The theme tokens object
 * @returns The success color scale
 */
export function success(tokens: Tokens): ColorScale {
    const success = tokens[STYLE_TOKENS][SUCCESS_KEY][VALUES_KEYWORD];

    return {
        "50": success["50"],
        "100": success["100"],
        "200": success["200"],
        "300": success["300"],
        "400": success["400"],
        "500": success["500"],
        "600": success["600"],
        "700": success["700"],
        "800": success["800"],
        "900": success["900"],
        "950": success["950"],
    };
}
