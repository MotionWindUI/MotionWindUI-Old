import { MotionWindUIBaseProps } from "@motionwindui/base";
import { RadioSlots, radioStyles, SlotClasses } from "@motionwindui/theme";
import React, { useCallback, useMemo, useState } from "react";
import {
  AriaRadioProps,
  mergeProps,
  useFocusRing,
  useHover,
  usePress,
  useRadio as useRACRadio,
} from "react-aria";
import { useRadioGroupContext } from "./RadioGroupContext";
import { useMotionWindUI } from "@motionwindui/provider";
import { clsxMerge, DEV_MODE, warn } from "@motionwindui/dev-utils";
import { Booleanish, dataAttr, getAriaDescription, getAriaLabel } from "@motionwindui/aria-utils";

type Props = React.HTMLProps<HTMLElement> & {
  mergeClassNames?: boolean;
};

type PropsDiv = React.HTMLProps<HTMLDivElement> & {
  mergeClassNames?: boolean;
};

type RootComponentProps = Partial<React.HTMLProps<HTMLElement>> & {
  "data-focus"?: Booleanish;
  "data-focus-visible"?: Booleanish;
  "data-selected"?: Booleanish;
  "data-invalid"?: Booleanish;
  "data-hover"?: Booleanish;
  "data-pressed"?: Booleanish;
  "data-hover-unselected"?: Booleanish;
  "data-press-unselected"?: Booleanish;
  "data-readonly"?: Booleanish;
  "data-disabled"?: Booleanish;
};

export interface RadioProps
  extends Omit<MotionWindUIBaseProps, "radius">,
    Omit<AriaRadioProps, "children">,
    Partial<Pick<HTMLElement, "className">> {
  /** The reference to the label of the radio button */
  ref?: React.Ref<HTMLLabelElement>;

  /** The description of the radio button */
  description?: string | React.ReactNode;

  /** The children (label) of the radio button */
  children?: string | React.ReactNode;

  /** The list of classes per slot */
  classList?: SlotClasses<RadioSlots>;
}

export const useRadio = (props: RadioProps) => {
  const groupContext = useRadioGroupContext();
  const globalContext = useMotionWindUI();

  const {
    asRoot,
    color = groupContext.color ?? "neutral",
    size = groupContext?.size ?? "md",
    isDisabled: isDisabledProp = groupContext?.isDisabled ?? false,
    disableAnimations = globalContext.disableAnimations || groupContext.disableAnimations || false,
    classList,
    className,
    ref,
    children,
    description,
    value,
    ...restProps
  } = props;

  const passedInputProps = { value, ...restProps };
  const passedProps = { ...restProps };

  if (!props.children && !props["aria-labelledby"] && !props["aria-label"] && DEV_MODE) {
    warn(
      "Label is not provided, so an aria-label or an aria-labelledby must be passed in for accessibility",
      "Radio",
    );
  }

  // Create a ref to the input element
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Get the state of the radio button
  const {
    labelProps: radioLabelProps,
    inputProps: radioInputProps,
    isDisabled: isDisabledRAC,
    isSelected,
    isPressed: isPressedInput,
  } = useRACRadio(props, groupContext.state, inputRef);

  // Set the disabled state based on the passed in props or the RAC state
  const isDisabled = isDisabledProp || isDisabledRAC || groupContext.isDisabled;

  // Check if the radio button is interactive
  const isInteractive = !isDisabled && !radioInputProps.readOnly;

  const isRequired = useMemo(() => groupContext.isRequired ?? false, [groupContext.isRequired]);
  const isInvalid = groupContext.isInvalid;
  const isReadOnly = radioInputProps.readOnly || groupContext?.isReadOnly;

  // Set the root HTML element of the component
  const RootComponent = asRoot || "label";

  /*
   * Set up the ARIA interactions for the radio button
   */
  const { isFocusVisible, isFocused, focusProps } = useFocusRing({
    autoFocus: props.autoFocus,
  });

  const { hoverProps, isHovered } = useHover({
    isDisabled: !isInteractive,
  });

  // Control the state in which the label is pressed (not the input itself)
  const [isPressedLabel, setIsPressedLabel] = useState(false);
  const { pressProps } = usePress({
    isDisabled: !isInteractive,
    onPressStart(e) {
      if (e.pointerType !== "keyboard") {
        setIsPressedLabel(true);
      }
    },
    onPressEnd(e) {
      if (e.pointerType !== "keyboard") {
        setIsPressedLabel(false);
      }
    },
  });

  // Give a final is pressed variable
  const isPressed = isInteractive ? isPressedLabel || isPressedInput : false;

  // Get the ARIA description and label properties plus the IDs (if any)
  const ariaDescription = getAriaDescription(props);
  // Specify that we are using the children property as the label and not something named label
  const ariaLabel = getAriaLabel(props, true);

  // Get the styles of the radio input button
  const styles = useMemo(
    () => radioStyles({ color, size, isDisabled, isReadOnly, isInvalid, disableAnimations }),
    [color, size, isDisabled, isReadOnly, isInvalid, disableAnimations],
  );

  /** The properties of the root component type (by default a label element) */
  const rootProps = useCallback(
    (props?: Props): RootComponentProps => {
      const { className: customClasses, mergeClassNames = true, ...otherProps } = props || {};

      const classNameProp = mergeClassNames
        ? styles.base({ className: clsxMerge(classList?.base, className, customClasses) })
        : customClasses;

      return {
        ...passedProps,
        ...otherProps,
        ref,
        className: classNameProp,
        "data-focus": dataAttr(isFocused),
        "data-focus-visible": dataAttr(isFocusVisible),
        "data-hover": dataAttr(isHovered),
        "data-invalid": dataAttr(isInvalid),
        "data-selected": dataAttr(isSelected),
        "data-hover-unselected": dataAttr(!isSelected && isHovered && !isPressed),
        "data-press-unselected": dataAttr(!isSelected && isPressed),
        "data-readonly": dataAttr(isReadOnly),
        "data-pressed": dataAttr(isPressed),
        "aria-required": dataAttr(isRequired),
        ...mergeProps(hoverProps, pressProps),
      };
    },
    [
      styles,
      hoverProps,
      pressProps,
      classList?.base,
      isFocused,
      isFocusVisible,
      isHovered,
      isSelected,
      radioInputProps.readOnly,
      ref,
      isPressed,
      passedProps,
      inputRef,
    ],
  );

  /** The properties of the input element of the radio button */
  const inputProps = useCallback(
    (props?: Props): React.HTMLProps<HTMLInputElement> => {
      // eslint-disable-next-line no-unused-vars
      const { className: customClasses, mergeClassNames: _, ...otherProps } = props || {};

      const classNameProp = customClasses;

      return {
        ...props,
        ...otherProps,
        className: classNameProp,
        ref: inputRef,
        ...radioInputProps,
        ...focusProps,
        "aria-label": ariaLabel["aria-label"],
        "aria-labelledby": ariaLabel["aria-labelledby"],
        "aria-description": ariaDescription["aria-description"],
        "aria-describedby": ariaDescription["aria-describedby"],
      };
    },
    [radioInputProps, isSelected, passedInputProps],
  );

  /** The properties of the main visual div around the visual control component */
  const wrapperProps = useCallback(
    (props?: Props): React.HTMLProps<HTMLElement> => {
      const { className: customClasses, mergeClassNames = true, ...otherProps } = props || {};

      const mergedClasses = mergeClassNames
        ? styles.wrapper({ className: clsxMerge(classList?.wrapper, customClasses) })
        : customClasses;

      return {
        ...passedProps,
        ...otherProps,
        className: mergedClasses,
        "aria-hidden": true,
      };
    },
    [styles, classList?.wrapper],
  );

  /** The text display of the label of the radio input */
  const labelProps = useCallback(
    (props?: Props): React.HTMLProps<HTMLElement> => {
      const { className: customClasses, mergeClassNames = true, ...otherProps } = props || {};

      const mergedClasses = mergeClassNames
        ? styles.label({ className: clsxMerge(classList?.label, customClasses) })
        : customClasses;

      return {
        ...passedProps,
        ...otherProps,
        id: ariaLabel.labelId,
        className: mergedClasses,
      };
    },
    [radioLabelProps, classList?.label],
  );

  /** The div wrapper around the label and description */
  const labelWrapperProps = useCallback(
    (props?: PropsDiv): React.HTMLProps<HTMLDivElement> => {
      const { className: customClasses, mergeClassNames = true, ...otherProps } = props || {};

      const mergedClasses = mergeClassNames
        ? styles.labelWrapper({ className: clsxMerge(classList?.labelWrapper, customClasses) })
        : customClasses;

      return {
        ...passedProps,
        ...otherProps,
        className: mergedClasses,
      };
    },
    [styles, classList?.labelWrapper],
  );

  /** The div to display the styles of the control. It is not the input. */
  const controlProps = useCallback(
    (props?: Props): React.HTMLProps<HTMLElement> => {
      const { className: customClasses, mergeClassNames = true, ...otherProps } = props || {};

      const mergedClasses = mergeClassNames
        ? styles.control({ className: clsxMerge(classList?.control, customClasses) })
        : customClasses;

      return {
        ...passedProps,
        ...otherProps,
        className: mergedClasses,
      };
    },
    [styles, classList?.control],
  );

  /** The span element to display the description of the radio input */
  const descriptionProps = useCallback(
    (props?: Props): React.HTMLProps<HTMLElement> => {
      const { className: customClasses, mergeClassNames = true, ...otherProps } = props || {};

      const mergedClasses = mergeClassNames
        ? styles.description({ className: clsxMerge(classList?.description, customClasses) })
        : customClasses;

      return {
        ...otherProps,
        id: ariaDescription.descriptionId,
        className: mergedClasses,
      };
    },
    [styles, classList?.description],
  );

  return {
    RootComponent,
    children,
    description,
    isSelected,
    rootProps,
    wrapperProps,
    labelProps,
    labelWrapperProps,
    inputProps,
    controlProps,
    descriptionProps,
  };
};

export type UseRadioReturn = ReturnType<typeof useRadio>;
