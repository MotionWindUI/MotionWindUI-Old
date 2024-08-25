import { useId } from "react-aria";
import { AriaDescriptionProps, AriaLabelProps } from "./types";

/**
 * Returns the appropriate ARIA label attributes based on the provided props.
 * If `label` prop is present, it returns `aria-labelledby` attribute with the value of `props["aria-labelledby"]` or a generated ID using `useId()`.
 * If `aria-label` prop is present, it returns `aria-label` attribute with the value of `props["aria-label"]`.
 * If `aria-labelledby` prop is present, it returns `aria-labelledby` attribute with the value of `props["aria-labelledby"]`.
 * If none of the above props are present, it returns an empty object.
 *
 * @param props - The props containing ARIA label attributes.
 * @param isChildLabel - Whether or not to use the children proptery instead of the label property
 * @returns An object containing the appropriate ARIA label attributes.
 */
export const getAriaLabel = (props: AriaLabelProps, isChildLabel: boolean = false) => {
  let labelId: string | undefined;

  if ((!isChildLabel && props.label) || (isChildLabel && props.children)) {
    labelId = props["aria-labelledby"] || useId();

    return { "aria-labelledby": labelId, labelId };
  }

  if (props["aria-label"]) {
    return { "aria-label": props["aria-label"], labelId: undefined };
  }

  if (props["aria-labelledby"]) {
    labelId = props["aria-labelledby"];

    return { "aria-labelledby": labelId, labelId };
  }

  return {};
};

/**
 * Retrieves the appropriate ARIA description attributes based on the provided props.
 * If `description` prop is present, it returns `aria-describedby` attribute with the value of `props["aria-describedby"]` or a generated ID using `useId()`.
 * If `aria-description` prop is present, it returns `aria-description` attribute with the value of `props["aria-description"]`.
 * If `aria-describedby` prop is present, it returns `aria-describedby` attribute with the value of `props["aria-describedby"]`.
 * If none of the above props are present, it returns an empty object.
 *
 * @param props - The props object containing the description and other ARIA attributes.
 * @returns An object containing the ARIA description attributes.
 */
export const getAriaDescription = (props: AriaDescriptionProps) => {
  let descriptionId: string | undefined;

  if (props.description) {
    descriptionId = props["aria-describedby"] || useId();

    return { "aria-describedby": descriptionId, descriptionId };
  }

  if (props["aria-description"]) {
    return { "aria-description": props["aria-description"], descriptionId: undefined };
  }

  if (props["aria-describedby"]) {
    descriptionId = props["aria-describedby"];

    return { "aria-describedby": descriptionId, descriptionId };
  }

  return {};
};

export type Booleanish = boolean | "true" | "false";
export const dataAttr = (attr: boolean | undefined) => (attr ? "true" : undefined) as Booleanish;
