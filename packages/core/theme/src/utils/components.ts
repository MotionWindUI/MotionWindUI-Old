import { twMerge } from "tailwind-merge";
import { Tokens } from "../colors/types";

export function generateCss(
    tokens: Tokens,
    prefix: string = "--",
    isFirst: boolean = true,
): Record<string, string> {
    const cssOutput: Record<string, string> = {};

    /**
     * Recursive function to add tokens to the CSS output
     * @param tokenDict The dictionary of tokens
     * @param prefix The prefix to add to the CSS variable
     * @param isFirst If this prefix is the first one
     */
    function addTokens(
        tokenDict: Tokens,
        prefix: string,
        isFirst: boolean = true,
    ) {
        for (const key in tokenDict) {
            const value = tokenDict[key];

            if (value && typeof value === "object" && "values" in value) {
                const values = value["values"];

                if (values && typeof values === "string") {
                    cssOutput[`${prefix}${key}`] = `${values}`;
                } else if (typeof values === "object") {
                    for (const subKey in values as Record<string, string>) {
                        const subValue = values[subKey];
                        cssOutput[`${prefix}${key}-${subKey}`] = `${subValue}`;
                    }
                }
            } else if (value && typeof value === "object") {
                const skipKey = isFirst ? "" : `${key}-`;
                addTokens(value, `${prefix}${skipKey}`, false);
            }
        }
    }

    addTokens(tokens, prefix, isFirst);

    return cssOutput;
}

export const combineStyles = (...styles: (string | undefined)[]) => {
    return twMerge(styles.filter(Boolean).join(" "));
};
