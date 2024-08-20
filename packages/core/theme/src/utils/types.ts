import { ClassValue } from "tailwind-variants";

export type SlotClassess<S extends string> = {
  // eslint-disable-next-line
  [key in S]?: ClassValue;
};
