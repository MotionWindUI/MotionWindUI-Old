import React, { useCallback, useMemo } from "react";
import { useRadioGroup as useRACRadioGroup } from "react-aria";
import { useRadioGroupState, RadioGroupState } from "@react-stately/radio";
import { radioGroupStyles, RadioGroupSlots, SlotClasses } from "@motionwindui/theme";
import { clsxMerge, DEV_MODE, warn } from "@motionwindui/dev-utils";
import { getAriaDescription, getAriaLabel } from "@motionwindui/aria-utils";
import { MotionWindUIBaseProps } from "@motionwindui/base";
import { AriaRadioGroupProps } from "react-aria";

export interface RadioGroupProps
  extends Omit<MotionWindUIBaseProps, "radius">,
    AriaRadioGroupProps,
    Pick<HTMLElement, "className"> {
  ref?: React.Ref<HTMLDivElement>;

  /** A label for the radio group */
  label?: string;

  /** A description for the radio group */
  description?: string | React.ReactNode;

  /** The radio group children */
  children?: React.ReactNode;

  /** The error message content for when the radio group is invalid */
  errorMessage?: string | React.ReactNode;

  /** The list of classes per slot */
  classList?: SlotClasses<RadioGroupSlots>;
}

export type RadioGroupContextType = {
  /** The state of the radio component */
  state: RadioGroupState;

  /** The color of the radio group */
  color?: RadioGroupProps["color"];

  /** The size of the radio group */
  size?: RadioGroupProps["size"];

  /** Whether or not the group is disabled */
  isDisabled?: RadioGroupProps["isDisabled"];

  /** Whether or not the group is invalid */
  isInvalid: boolean;

  /** Whether or not the group is read-only */
  isReadOnly?: RadioGroupProps["isReadOnly"];

  /** Whether or not the radio group is required in the form */
  isRequired?: RadioGroupProps["isRequired"];

  /** Disables the radio group animations */
  disableAnimations?: RadioGroupProps["disableAnimations"];
};

export const useRadioGroup = (props: RadioGroupProps) => {
  const {
    color = "neutral",
    size = "md",
    isRequired = false,
    isInvalid: isInvalidProp,
    disableAnimations,
    className,
    classList,
    children,
    label,
    description,
    errorMessage: errorMessageProp,
    isReadOnly,
    isDisabled,
    ref,
  } = props;

  const RootComponent = "div";

  const state = useRadioGroupState(props);
  const {
    radioGroupProps,
    labelProps,
    descriptionProps,
    errorMessageProps,
    isInvalid: isInvalidGroup,
    validationErrors,
  } = useRACRadioGroup(props, state);

  const styles = useMemo(
    () =>
      radioGroupStyles({
        size,
        isRequired,
      }),
    [size, isRequired],
  );

  // Determine if the group is invalid
  const isInvalid = isInvalidProp || isInvalidGroup || state.isInvalid;

  const context: RadioGroupContextType = useMemo(
    () => ({
      state,
      color,
      size,
      isInvalid,
      isReadOnly,
      isDisabled,
      disableAnimations,
    }),
    [
      state,
      color,
      size,
      isInvalid,
      isReadOnly,
      isDisabled,
      disableAnimations,
      state.isInvalid,
      isInvalidGroup,
      isInvalidProp,
    ],
  );

  // Warn the developer about accessibility
  if (!props.label && !props["aria-labelledby"] && !props["aria-label"] && DEV_MODE) {
    warn(
      "Label is not provided, so an aria-labelledby or aria-label needs to be provided for accessibility",
      "RadioGroup",
    );
  }

  // Get the ARIA description and label properties plus the IDs (if any)
  const ariaDescription = getAriaDescription(props);
  const ariaLabel = getAriaLabel(props);

  // Set the base div properties
  const groupBaseProps = useCallback((): React.HTMLProps<HTMLElement> => {
    return {
      ref,
      className: styles.base({ className: clsxMerge(classList?.base, className) }),
      ...radioGroupProps,
      "aria-label": ariaLabel["aria-label"],
      "aria-labelledby": ariaLabel["aria-labelledby"],
      "aria-description": ariaDescription["aria-description"],
      "aria-describedby": ariaDescription["aria-describedby"],
    };
  }, [styles, classList?.base, radioGroupProps]);

  // Set the label of the group
  const groupLabelProps = useCallback((): React.HTMLProps<HTMLElement> => {
    return {
      className: styles.label({ className: classList?.label }),
      ...labelProps,
      id: ariaLabel.labelId,
    };
  }, [styles, classList?.label, labelProps]);

  // Set the description of the group
  const groupDescriptionProps = useCallback((): React.HTMLProps<HTMLElement> => {
    return {
      className: styles.description({ className: classList?.description }),
      ...descriptionProps,
      id: ariaDescription.descriptionId,
    };
  }, [styles, classList?.description, descriptionProps]);

  const groupWrapperProps = useCallback((): React.HTMLProps<HTMLDivElement> => {
    return {
      className: styles.wrapper({ className: classList?.wrapper }),
    };
  }, [styles, classList?.wrapper]);

  // Set the error message of the group
  const groupErrorProps = useCallback((): React.HTMLProps<HTMLElement> => {
    return {
      className: styles.errorMessage({ className: classList?.errorMessage }),
      ...errorMessageProps,
    };
  }, [styles, classList?.errorMessage, errorMessageProps]);

  return {
    RootComponent,
    children,
    label,
    description,
    context,
    isInvalid,
    errorMessage: errorMessageProp || validationErrors.join(" "),
    groupBaseProps,
    groupLabelProps,
    groupDescriptionProps,
    groupWrapperProps,
    groupErrorProps,
  };
};
