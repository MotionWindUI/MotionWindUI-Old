// Type for media query map that accepts any string key
export type MediaQueryMap = { [key: string]: string };

// Type for useBreakpoint hook props
export type UseBreakpointProps = {
  mediaMap?: MediaQueryMap;
  size?: string;
};

export const MediaSize: MediaQueryMap = {
  SM: "sm",
  MD: "md",
  LG: "lg",
  XL: "xl",
  "2XL": "2xl",
};
