/**
 * A set of classes to apply a focus ring to an element based on the data attribute.
 */
export const focusRing: string[] = [
  "data-[focus-visible=true]:z-10",
  "data-[focus-visible=true]:outline",
  "data-[focus-visible=true]:outline-2",
  "data-[focus-visible=true]:outline-primary-600",
  "data-[focus-visible=true]:outline-offset-2",
];

export const groupDataFocusRing: string[] = [
  "group-data-[focus-visible=true]:z-10",
  "group-data-[focus-visible=true]:outline",
  "group-data-[focus-visible=true]:outline-2",
  "group-data-[focus-visible=true]:outline-offset-2",
  "group-data-[focus-visible=true]:outline-primary-600",
];
