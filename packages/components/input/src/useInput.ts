import { MotionWindUIBaseProps } from "@motionwindui/base";
import { useMotionWindUI } from "@motionwindui/provider";
import React, { useCallback, useMemo, useRef } from "react";
import { AriaTextFieldProps, useFocusRing, useHover, useTextField } from "react-aria";
import { Booleanish, dataAttr, getAriaDescription, getAriaLabel } from "@motionwindui/aria-utils";
import { clsxMerge, DEV_MODE, warn } from "@motionwindui/dev-utils";
import { InputSlots, inputStyles, SlotClasses } from "@motionwindui/theme";
import { useControlledState } from "@react-stately/utils";
import { useBreakpoint } from "@motionwindui/use-breakpoint";

type Props = React.HTMLProps<HTMLElement> & {
  mergeClassNames?: boolean;
};

type PropsDiv = React.HTMLProps<HTMLDivElement> & {
  mergeClassNames?: boolean;
};

type LabelProps = React.HTMLProps<HTMLLabelElement> & {
  mergeClassNames?: boolean;
};

/**
 * The HTML element type for the input element (based on whether it is a multi-line input or not)
 */
type InputType<IsMultiLine extends boolean> = IsMultiLine extends true
  ? HTMLTextAreaElement
  : HTMLInputElement;

export type InputLabelPlacement = "top" | "left";

export interface InputProps
  extends MotionWindUIBaseProps,
    Omit<AriaTextFieldProps, "children">,
    Partial<Pick<HTMLElement, "className">> {
  /** The reference to the label of the input */
  ref?: React.Ref<HTMLLabelElement>;

  /** The label of the input */
  label?: string | React.ReactNode;

  /** The description of the input */
  description?: string | React.ReactNode;

  /** The placeholder of the input */
  placeholder?: string;

  /** The error message for when the input is invalid */
  errorMessage?: string | React.ReactNode;

  /** Whether or not this input is a multi-line input. By default it is false */
  isMultiLine?: boolean;

  /** The placement of the label */
  labelPlacement?: InputLabelPlacement;

  /** Content that comes before the input */
  startContent?: React.ReactNode;

  /** Use a button for the start content */
  isStartContentButton?: boolean;

  /** Use the pre-defined styles for the start content */
  isStartContentStyled?: boolean;

  /** Content that comes after the input */
  endContent?: React.ReactNode;

  /** Use a button for the end content */
  isEndContentButton?: boolean;

  /** Use the pre-defined styles for the end content */
  isEndContentStyled?: boolean;

  /** The list of slots */
  classList?: SlotClasses<InputSlots>;

  /** Whether or not to use a responsive layout for the label. Depending on the media break, if the label shrinks past that and it is on the left, it will adjust to the top position */
  useResponsiveLabel?: boolean;

  /** The media break at which the label will adjust to the top position if it is on the left and shrinks past that break */
  responsiveLabelBreak?: "sm" | "md" | "lg" | "xl";
}

/**
 * The props for the root component. It extends the HTML props and adds data attribute props.
 */
type RootComponentProps = Partial<React.HTMLProps<HTMLElement>> & {
  "data-focus": Booleanish;
  "data-focus-visible": Booleanish;
  "data-hover": Booleanish;
  "data-invalid": Booleanish;
  "data-disabled": Booleanish;
  "data-readonly": Booleanish;
  "data-required": Booleanish;
  "data-label-placement": InputLabelPlacement;
};

export const useInput = (props: InputProps) => {
  const globalContext = useMotionWindUI();

  const {
    color = "neutral",
    size = "md",
    radius = "md",
    label,
    description,
    placeholder,
    errorMessage,
    isDisabled: isDisabledProp = false,
    isReadOnly: isReadOnlyProp = false,
    isRequired: isRequiredProp = false,
    isInvalid: isInvalidProp,
    isMultiLine = false,
    disableAnimations = globalContext.disableAnimations ?? false,
    labelPlacement = "top",
    className,
    startContent: startContentProp,
    isStartContentButton,
    isStartContentStyled,
    endContent: endContentProp,
    isEndContentButton,
    isEndContentStyled,
    classList,
    ref,
    useResponsiveLabel = !!label,
    responsiveLabelBreak = "sm",
    asRoot = "div",
    ...rest
  } = props;

  // Determine the input element type
  const inputElementType = isMultiLine ? "textarea" : "input";

  // Determine the HTML element type for the input element
  const InputElement = isMultiLine ? "textarea" : "input";

  // Determine the typescript type for the input element
  type InputElementType = InputType<typeof isMultiLine>;

  if (!props.label && !props["aria-label"] && !props["aria-labelledby"] && DEV_MODE) {
    warn("Input", "Label is not provided, so an aria-label or an aria-labelledby must be passed");
  }

  /**
   * Set up any ARIA attributes for the input element
   */
  const ariaDescription = getAriaDescription(props);
  const ariaLabel = getAriaLabel(props);

  // Create a ref for the input element
  const inputRef = useRef<InputElementType>(null);

  // Determine if the breakpoint is at least the responsive label break
  const isAtLeastAtBreakpoint = useBreakpoint({ size: responsiveLabelBreak });

  // Determine the final label placement by checking if the responsive label is enabled and if the label placement is left
  // If the responsive label is enabled and the label placement is left, and we are not at least at the breakpoint, then the label placement will be top
  // Otherwise, the label placement will be the same as the label placement prop
  const labelPlacementFinal = useMemo(() => {
    if (useResponsiveLabel && labelPlacement === "left" && !isAtLeastAtBreakpoint) {
      return "top";
    }

    return labelPlacement;
  }, [useResponsiveLabel, labelPlacement, isAtLeastAtBreakpoint]);

  const {
    labelProps: labelPropsRAC,
    inputProps: inputPropsRAC,
    descriptionProps: descriptionPropsRAC,
    errorMessageProps: errorMessagePropsRAC,
    isInvalid: isInvalidRAC,
  } = useTextField(
    {
      ...props,
      inputElementType,
      "aria-label": ariaLabel["aria-label"],
      "aria-labelledby": ariaLabel["aria-labelledby"],
      "aria-describedby": ariaDescription["aria-describedby"],
    },
    inputRef,
  );

  const isInvalid = useMemo(() => isInvalidProp || isInvalidRAC, [isInvalidProp, isInvalidRAC]);

  // Set the RootComponent to the div element type (the div wraps the whole component)
  const RootComponent = asRoot || "div";

  // Determines if the input is disabled, required, or read-only
  const isDisabled = useMemo(
    () => isDisabledProp || inputPropsRAC.disabled,
    [isDisabledProp, inputPropsRAC.disabled],
  );
  const isRequired = useMemo(
    () => isRequiredProp || inputPropsRAC.required,
    [isRequiredProp, inputPropsRAC.required],
  );
  const isReadOnly = useMemo(
    () => isReadOnlyProp || inputPropsRAC.readOnly,
    [isReadOnlyProp, inputPropsRAC.readOnly],
  );

  // Determines if the element is interactive
  const isInteractive = !isDisabled || !isReadOnly;

  /**
   * Set up interactions for the input element
   */
  const { isFocusVisible, isFocused, focusProps } = useFocusRing({
    autoFocus: props.autoFocus,
  });

  const { hoverProps, isHovered } = useHover({
    isDisabled: !isInteractive,
  });

  const styles = useMemo(() => inputStyles({ radius, color }), [radius, color]);

  const rootProps = useCallback(
    (props?: Props): RootComponentProps => {
      const { className: customClasses, mergeClassNames = true, ...otherProps } = props || {};

      const classNameProp = mergeClassNames
        ? styles.root({ className: clsxMerge(classList?.root, className, customClasses) })
        : customClasses;

      return {
        ...otherProps,
        className: classNameProp,
        "data-focus": dataAttr(isFocused),
        "data-focus-visible": dataAttr(isFocusVisible),
        "data-hover": dataAttr(isHovered),
        "data-invalid": dataAttr(isInvalid),
        "data-disabled": dataAttr(isDisabled),
        "data-readonly": dataAttr(isReadOnly),
        "data-required": dataAttr(isRequired),
        "data-label-placement": labelPlacementFinal,
      };
    },
    [
      styles,
      classList,
      isFocused,
      isFocusVisible,
      isHovered,
      isInvalid,
      isDisabled,
      isReadOnly,
      labelPlacement,
    ],
  );

  const labelProps = useCallback(
    (props?: LabelProps): React.HTMLProps<HTMLLabelElement> => {
      const { className: customClasses, mergeClassNames = true, ...otherProps } = props || {};

      const classNameProp = mergeClassNames
        ? styles.label({ className: clsxMerge(classList?.label, customClasses) })
        : customClasses;

      return {
        ...otherProps,
        ...labelPropsRAC,
        className: classNameProp,
      };
    },
    [classList?.label, label, labelPlacement],
  );

  const labelWrapperProps = useCallback(
    (props?: PropsDiv): React.HTMLProps<HTMLDivElement> => {
      const { className: customClasses, mergeClassNames = true, ...otherProps } = props || {};

      const classNameProp = mergeClassNames
        ? styles.labelWrapper({ className: clsxMerge(classList?.labelWrapper, customClasses) })
        : customClasses;

      return {
        ...otherProps,
        className: classNameProp,
      };
    },
    [classList?.labelWrapper],
  );

  const inputProps = useCallback(
    (props?: Props): React.HTMLProps<InputElementType> => {
      const { className: customClasses, mergeClassNames = true, ...otherProps } = props || {};

      const classNameProp = mergeClassNames
        ? styles.input({ className: clsxMerge(classList?.input, customClasses) })
        : customClasses;

      return {
        ...otherProps,
        ...inputPropsRAC,
        ...focusProps,
        ...hoverProps,
        ref: inputRef,
        className: classNameProp,
        placeholder,
      };
    },
    [inputPropsRAC, classList?.input, placeholder],
  );

  const inputContentWrapperProps = useCallback(
    (props?: PropsDiv): React.HTMLProps<HTMLDivElement> => {
      const { className: customClasses, mergeClassNames = true, ...otherProps } = props || {};

      const classNameProp = mergeClassNames
        ? styles.inputContentWrapper({
            className: clsxMerge(classList?.inputContentWrapper, customClasses),
          })
        : customClasses;

      return {
        ...otherProps,
        className: classNameProp,
      };
    },
    [classList?.inputContentWrapper],
  );

  const inputWrapperProps = useCallback(
    (props?: PropsDiv): React.HTMLProps<HTMLDivElement> => {
      const { className: customClasses, mergeClassNames = true, ...otherProps } = props || {};

      const classNameProp = mergeClassNames
        ? styles.inputWrapper({ className: clsxMerge(classList?.inputWrapper, customClasses) })
        : customClasses;

      return {
        ...otherProps,
        className: classNameProp,
      };
    },
    [classList?.inputWrapper, isDisabled, isReadOnly],
  );

  const helpContentWrapperProps = useCallback(
    (props?: PropsDiv): React.HTMLProps<HTMLDivElement> => {
      const { className: customClasses, mergeClassNames = true, ...otherProps } = props || {};

      const classNameProp = mergeClassNames
        ? styles.helpContentWrapper({
            className: clsxMerge(classList?.helpContentWrapper, customClasses),
          })
        : customClasses;

      return {
        ...otherProps,
        className: classNameProp,
      };
    },
    [classList?.helpContentWrapper],
  );

  const descriptionProps = useCallback(
    (props?: Props): React.HTMLProps<HTMLElement> => {
      const { className: customClasses, mergeClassNames = true, ...otherProps } = props || {};

      const classNameProp = mergeClassNames
        ? styles.description({ className: clsxMerge(classList?.description, customClasses) })
        : customClasses;

      return {
        ...otherProps,
        ...descriptionPropsRAC,
        className: classNameProp,
      };
    },
    [classList?.description],
  );

  const errorMessageProps = useCallback(
    (props?: Props): React.HTMLProps<HTMLElement> => {
      const { className: customClasses, mergeClassNames = true, ...otherProps } = props || {};

      const classNameProp = mergeClassNames
        ? styles.errorMessage({ className: clsxMerge(classList?.errorMessage, customClasses) })
        : customClasses;

      return {
        ...otherProps,
        ...errorMessagePropsRAC,
        className: classNameProp,
      };
    },
    [classList?.errorMessage],
  );

  return {
    RootComponent,
    InputElement,
    label,
    description,
    errorMessage,
    isInvalid,
    rootProps,
    labelProps,
    labelWrapperProps,
    inputWrapperProps,
    inputContentWrapperProps,
    helpContentWrapperProps,
    errorMessageProps,
    descriptionProps,
    inputProps,
  };
};
