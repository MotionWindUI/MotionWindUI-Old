// Type for media query map that accepts any string key
export type MediaQueryMap = { [key: string]: string };

// Type for useBreakpoint hook props
export type UseBreakpointProps = {
  mediaMap?: MediaQueryMap; // Allow custom media map with any key
  size?: string; // Optional: Check if at least this size
};

export const MediaSize = {
  SM: "sm",
  MD: "md",
  LG: "lg",
  XL: "xl",
  "2XL": "2xl",
};
