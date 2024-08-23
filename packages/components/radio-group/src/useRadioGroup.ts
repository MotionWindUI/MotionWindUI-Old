import { useId, useRadioGroup as useRACRadioGroup } from "react-aria";
import { useRadioGroupState } from "@react-stately/radio";
import { RadioGroupContextType, RadioGroupProps } from "./RadioGroup";
import { radioGroupStyles } from "@motionwindui/theme";
import { useCallback, useMemo } from "react";
import { clsxMerge, DEV_MODE, warn } from "@motionwindui/dev-utils";

export const useRadioGroup = (props: RadioGroupProps) => {
  const {
    color = "neutral",
    size = "md",
    isRequired = false,
    isDisabled,
    isInvalid: isInvalidProp,
    validationBehavior,
    disableAnimations,
    className,
    classList,
    labelId: labelIdProp,
  } = props;

  const state = useRadioGroupState(props);
  const {
    radioGroupProps,
    labelProps,
    descriptionProps,
    errorMessageProps,
    isInvalid: isInvalidGroup,
  } = useRACRadioGroup(props, state);

  const styles = useMemo(
    () =>
      radioGroupStyles({
        size,
        isRequired,
        isDisabled,
      }),
    [size, isRequired, isDisabled],
  );

  // Determine if the group is invalid
  const isInvalid = isInvalidProp || isInvalidGroup || state.isInvalid;

  const context: RadioGroupContextType = useMemo(
    () => ({
      state,
      color,
      size,
      isInvalid,
      validationBehavior,
      disableAnimations,
    }),
    [
      state,
      color,
      size,
      isInvalid,
      validationBehavior,
      disableAnimations,
      state.isInvalid,
      isInvalidGroup,
      isInvalidProp,
    ],
  );

  // Warn the developer about accessibility
  if (
    !props.label &&
    labelIdProp &&
    !props["aria-labelledby"] &&
    !props["aria-label"] &&
    DEV_MODE
  ) {
    warn(
      "Label is not provided, so an aria-labelledby or aria-label needs to be provided for accessibility",
      "RadioGroup",
    );
  }

  // If a label is provided, then generate an ID for it
  const labelId = props.label ? useId() : undefined;

  // Set the base div properties
  const getBaseProps = useCallback(() => {
    return {
      className: styles.base({ className: clsxMerge(className, classList?.base) }),
      ...radioGroupProps,
      "aria-labelledby": labelId,
    };
  }, [styles, classList?.base, radioGroupProps]);

  return {
    getBaseProps,
  };
};
