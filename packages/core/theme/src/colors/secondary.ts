import { ColorScale, STYLE_TOKENS, Tokens, VALUES_KEYWORD } from "./types";

const SECONDARY_KEY = "secondary";

/**
 * Get the fuchsia blue color scale.
 *
 * @param tokens The theme tokens object
 * @returns The fuchsia blue color scale
 */
export function secondary(tokens: Tokens): ColorScale {
  const secondaryTokens = tokens[STYLE_TOKENS][SECONDARY_KEY][VALUES_KEYWORD];

  return {
    "50": secondaryTokens["50"],
    "100": secondaryTokens["100"],
    "200": secondaryTokens["200"],
    "300": secondaryTokens["300"],
    "400": secondaryTokens["400"],
    "500": secondaryTokens["500"],
    "600": secondaryTokens["600"],
    "700": secondaryTokens["700"],
    "800": secondaryTokens["800"],
    "900": secondaryTokens["900"],
    "950": secondaryTokens["950"],
  };
}
