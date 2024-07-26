import { readFileSync } from "fs";
import path from "path";
import yaml from "yaml";
import { Tokens } from "../colors/types";

const EXTENDS_KEYWORD = "extends";
const INCLUDES_KEYWORD = "includes";

/**
 * Load a YAML file and parse it into a Tokens object.
 *
 * @param filePath The path to the YAML file
 * @returns The parsed tokens objects.
 */
export function loadYaml(filePath: string): Tokens {
  const fileContents = readFileSync(filePath, "utf8");
  let tokens = yaml.parse(fileContents) as Tokens;

  /**
   * If the tokens object has an `extends` key, then load that file and use it as the base tokens object.
   */
  if (tokens[EXTENDS_KEYWORD]) {
    const baseTokens = loadYaml(
      path.resolve(path.dirname(filePath), tokens[EXTENDS_KEYWORD] as string),
    );

    tokens = { ...baseTokens, ...tokens };
  }

  /**
   * If the tokens object has an `includes` key, then load those files and use them to extend the tokens object.
   */
  if (tokens[INCLUDES_KEYWORD]) {
    const tokenIncludeFiles = tokens[INCLUDES_KEYWORD] as string[];

    tokenIncludeFiles.forEach((includePath: string) => {
      const includeTokens = loadYaml(path.resolve(path.dirname(filePath), includePath));

      tokens = { ...tokens, ...includeTokens };
    });
  }

  // Remove the `extends` and `includes` keys from the tokens object
  delete tokens[EXTENDS_KEYWORD];
  delete tokens[INCLUDES_KEYWORD];

  return tokens;
}
