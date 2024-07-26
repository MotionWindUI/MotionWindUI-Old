import { STYLE_TOKENS, ColorScale, Tokens, VALUES_KEYWORD } from "./types";

const DANGER_KEY = "danger";

/**
 * Get the danger color scale.
 *
 * @param tokens The theme tokens object
 * @returns The danger color scale
 */
export function danger(tokens: Tokens): ColorScale {
  const danger = tokens[STYLE_TOKENS][DANGER_KEY][VALUES_KEYWORD];

  return {
    "50": danger["50"],
    "100": danger["100"],
    "200": danger["200"],
    "300": danger["300"],
    "400": danger["400"],
    "500": danger["500"],
    "600": danger["600"],
    "700": danger["700"],
    "800": danger["800"],
    "900": danger["900"],
    "950": danger["950"],
  };
}
