import React from "react";

export interface AriaLabelProps {
  label?: string | React.ReactNode;
  children?: string | React.ReactNode;
  "aria-label"?: string;
  "aria-labelledby"?: string;
}

export interface AriaDescriptionProps {
  description?: string | React.ReactNode;
  "aria-description"?: string;
  "aria-describedby"?: string;
}
