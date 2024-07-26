import { twMerge } from "tailwind-merge";

/**
 * Combine styles together.
 *
 * @param styles - The styles to combine.
 * @returns The combined styles.
 */
export const combineStyles = (...styles: (string | undefined)[]) => {
  return twMerge(styles.filter(Boolean).join(" "));
};
