import { ClassValue } from "tailwind-variants";

export type SlotClasses<S extends string> = {
  // eslint-disable-next-line
  [key in S]?: ClassValue;
};
