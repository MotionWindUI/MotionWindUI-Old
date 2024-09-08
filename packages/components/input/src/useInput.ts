import { MotionWindUIBaseProps } from "@motionwindui/base";
import React, { createElement, useCallback, useMemo, useRef } from "react";
import { AriaTextFieldProps, mergeProps, useFocusRing, useHover, useTextField } from "react-aria";
import { Booleanish, dataAttr, getAriaDescription, getAriaLabel } from "@motionwindui/aria-utils";
import { clsxMerge, DEV_MODE, warn } from "@motionwindui/dev-utils";
import { InputSlots, inputStyles, SlotClasses } from "@motionwindui/theme";
import { Button, ButtonProps } from "@motionwindui/button";
import { useControlledState } from "@react-stately/utils";
import { useSafeLayoutEffect } from "@motionwindui/use-safe-layout-effect";
import { mergeRefs } from "@motionwindui/react-utils";
import { useMotionWindUI } from "@motionwindui/provider";

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

export interface InputProps<T extends HTMLInputElement | HTMLTextAreaElement = HTMLInputElement>
  extends MotionWindUIBaseProps,
    Omit<AriaTextFieldProps, "children">,
    Partial<Pick<HTMLElement, "className">> {
  /** The variant of the input */
  variant?: "flat" | "outline" | "underlined" | "bordered";

  /** The reference to the label of the input */
  ref?: React.Ref<T>;

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

  /** The properties of the start content button */
  startContentProps?: ButtonProps;

  /** Content that comes after the input */
  endContent?: React.ReactNode;

  /** Use a button for the end content */
  isEndContentButton?: boolean;

  /** Use the pre-defined styles for the end content */
  isEndContentStyled?: boolean;

  /** The properties of the end content button */
  endContentProps?: ButtonProps;

  /** The list of slots */
  classList?: SlotClasses<InputSlots>;
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
  "data-hidden"?: Booleanish;
  "data-has-start-content"?: Booleanish;
  "data-has-end-content"?: Booleanish;
  "data-has-help-content"?: Booleanish;
};

type InputComponentProps<T extends HTMLInputElement | HTMLTextAreaElement> = React.HTMLProps<T> & {
  "data-hide-scrollbar"?: Booleanish;
};

export const useInput = <T extends HTMLInputElement | HTMLTextAreaElement = HTMLInputElement>(
  props: InputProps<T>,
) => {
  const globalContext = useMotionWindUI();

  const {
    color = "neutral",
    variant = "flat",
    size = "md",
    radius = "md",
    label,
    description,
    placeholder,
    errorMessage,
    disableAnimations = globalContext.disableAnimations ?? false,
    isDisabled: isDisabledProp = false,
    isReadOnly: isReadOnlyProp = false,
    isRequired: isRequiredProp = false,
    isInvalid: isInvalidProp,
    isMultiLine = false,
    labelPlacement = "top",
    className,
    startContent: startContentProp,
    isStartContentButton = false,
    isStartContentStyled = true,
    startContentProps,
    endContent: endContentProp,
    isEndContentButton = false,
    isEndContentStyled = true,
    endContentProps,
    classList,
    ref,
    validationBehavior,
    asRoot = "div",
  } = props;

  const [inputValue, setInputValue] = useControlledState(
    props.value,
    props.defaultValue ?? "",
    props.onChange,
  );

  // Determine the input element type
  const inputElementType = isMultiLine ? "textarea" : "input";

  // Determine the HTML element type for the input element
  const InputElement = isMultiLine ? "textarea" : "input";

  // Determine the typescript type for the input element
  type InputElementType = InputType<typeof isMultiLine>;

  // Warn the developer if a label is not provided and an aria-label or aria-labelledby is not passed
  if (!props.label && !props["aria-label"] && !props["aria-labelledby"] && DEV_MODE) {
    warn("Label is not provided, so an aria-label or an aria-labelledby must be passed", "Input");
  }

  /**
   * Set up any ARIA attributes for the input element
   */
  const ariaDescription = getAriaDescription(props);
  const ariaLabel = getAriaLabel(props);

  // Create a ref for the input element
  const inputRef = useRef<T>(null);

  useSafeLayoutEffect(() => {
    if (!inputRef.current) return;

    setInputValue(inputRef.current.value);
  }, [inputRef.current]);

  const {
    labelProps: labelPropsRAC,
    inputProps: inputPropsRAC,
    descriptionProps: descriptionPropsRAC,
    errorMessageProps: errorMessagePropsRAC,
    isInvalid: isInvalidRAC,
  } = useTextField(
    {
      ...props,
      validationBehavior,
      value: inputValue,
      inputElementType,
      "aria-label": ariaLabel["aria-label"],
      "aria-labelledby": ariaLabel["aria-labelledby"],
      "aria-describedby": ariaDescription["aria-describedby"],
      onChange: setInputValue,
    },
    inputRef,
  );

  // Set the RootComponent to the div element type (the div wraps the whole component)
  const RootComponent = asRoot || "div";

  // Determines if the input is invalid, disabled, required, or read-only
  const isInvalid = useMemo(() => isInvalidProp || isInvalidRAC, [isInvalidProp, isInvalidRAC]);

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

  // Determines if the element is hidden
  const isHidden = props.type === "hidden";

  // Determines if the element is interactive
  const isInteractive = !isDisabled && !isReadOnly;

  /**
   * Set up interactions for the input element
   */
  const { isFocusVisible, isFocused, focusProps } = useFocusRing({
    autoFocus: props.autoFocus,
  });

  const { hoverProps, isHovered } = useHover({
    isDisabled: !isInteractive,
  });

  /**
   * Set up the styles for the input element
   */
  const styles = useMemo(
    () =>
      inputStyles({
        radius,
        color,
        variant,
        size,
        labelPlacement,
        disableAnimations,
        isInvalid,
        isDisabled,
        isReadOnly,
        isRequired,
        isMultiLine,
      }),
    [
      radius,
      color,
      variant,
      size,
      labelPlacement,
      disableAnimations,
      isInvalid,
      isInteractive,
      isDisabled,
      isReadOnly,
      isRequired,
      isMultiLine,
    ],
  );

  /**
   * Returns the properties of the root of the component (a div element)
   */
  const rootProps = useCallback(
    (props?: Props): RootComponentProps => {
      // Allow the developer to pass in even more specific classes if using the useInput hook
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
        "data-label-placement": labelPlacement,
        "data-hidden": dataAttr(isHidden),
        "data-has-start-content": dataAttr(!!startContentProp),
        "data-has-end-content": dataAttr(!!endContentProp),
        "data-has-help-content": dataAttr(!!description || (isInvalid && !!errorMessage)),
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
      description,
      isInvalid,
      errorMessage,
      startContentProp,
      endContentProp,
      isHidden,
    ],
  );

  /**
   * Returns the properties of the label element
   */
  const labelProps = useCallback(
    (props?: LabelProps): React.HTMLProps<HTMLLabelElement> => {
      const { className: customClasses, mergeClassNames = true, ...otherProps } = props || {};

      const classNameProp = mergeClassNames
        ? styles.label({ className: clsxMerge(classList?.label, customClasses) })
        : customClasses;

      return {
        ...otherProps,
        ...labelPropsRAC,
        ...hoverProps,
        className: classNameProp,
      };
    },
    [classList?.label, label, labelPlacement, labelPropsRAC, hoverProps],
  );

  /**
   * Returns the properties of the label wrapper element. This is the div that wraps the label and the input element
   */
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

  /**
   * Returns the properties of the input element. This is the input element itself.
   */
  const inputProps = useCallback(
    (props?: Props): InputComponentProps<InputElementType> => {
      const { className: customClasses, mergeClassNames = true, ...otherProps } = props || {};

      const classNameProp = mergeClassNames
        ? styles.input({ className: clsxMerge(classList?.input, customClasses) })
        : customClasses;

      return {
        "data-hide-scrollbar": isMultiLine,
        ...mergeProps(otherProps, inputPropsRAC, focusProps, hoverProps),
        ref: mergeRefs(inputRef, ref),
        className: classNameProp,
        placeholder,
      };
    },
    [inputPropsRAC, classList?.input, placeholder, focusProps, hoverProps, isMultiLine],
  );

  /**
   * Returns the properties of the input content wrapper element. This is the div that wraps the input element and the start and end content.
   */
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

  /**
   * Returns the properties of the input wrapper element. This is the div that wraps the input content wrapper and the help content wrapper.
   */
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

  /**
   * Returns the properties of the help content wrapper element. This is the div that wraps the description and error message.
   */
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
    [
      classList?.helpContentWrapper,
      description,
      errorMessage,
      descriptionPropsRAC,
      errorMessagePropsRAC,
    ],
  );

  /**
   * Returns the properties of the description element. This is the span element that contains the description of the input.
   */
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
    [classList?.description, descriptionPropsRAC, description],
  );

  /**
   * Returns the properties of the error message element. This is the span element that contains the error message of the input.
   */
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
    [classList?.errorMessage, errorMessagePropsRAC, errorMessage],
  );

  /**
   * Renders the content based on the type of content it is (button, styled, or neither).
   *
   * @param content The React node to render
   * @param isButton Whether the content is a button
   * @param isStyled Whether the content is styled
   * @param style The style to apply to the content
   * @param props If the content is a button, the props to apply to the button
   * @returns A React element that is either a button, span, or the content itself
   */
  const renderContent = (
    content: React.ReactNode,
    isButton: boolean,
    isStyled: boolean,
    style: string,
    props?: ButtonProps,
  ): React.ReactNode => {
    if (isButton && !!content) {
      const buttonProps: ButtonProps = {
        color,
        size,
        radius,
        variant: "faded",
        isIconOnly: true,
        startContent: content,
        // We are using a custom class to remove the background color
        // This is because we don't want the button to have a background color
        // But instead just let the icon (text color) do the work
        // !bg-transparent will propagate all states because of the ! prefix
        className: "!bg-transparent",
        ...props,
      };

      return createElement(Button, buttonProps);
    }

    if (isStyled && !isButton && !!content) {
      return createElement("span", { className: style }, content);
    }

    return content;
  };

  /**
   * The start content of the input (if any)
   */
  const startContent = useMemo(
    () =>
      renderContent(
        startContentProp,
        isStartContentButton,
        isStartContentStyled,
        clsxMerge(styles.startContent(), classList?.startContent),
        startContentProps,
      ),
    [startContentProp, isStartContentButton, isStartContentStyled],
  );

  /**
   * The end content of the input (if any)
   */
  const endContent = useMemo(
    () =>
      renderContent(
        endContentProp,
        isEndContentButton,
        isEndContentStyled,
        clsxMerge(styles.endContent(), classList?.endContent),
        endContentProps,
      ),
    [endContentProp, isEndContentButton, isEndContentStyled],
  );

  return {
    RootComponent,
    InputElement,
    label,
    description,
    errorMessage,
    startContent,
    endContent,
    isInvalid,
    inputRef,
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
