import React, { useMemo } from "react";
import { MotionWindUIBaseProps } from "@motionwindui/base";
import { RadioGroupProvider } from "./RadioGroupContext";
import { RadioGroupSlots, radioGroupStyles, SlotClassess } from "@motionwindui/theme";
import { AriaRadioGroupProps, useId, useRadioGroup } from "react-aria";
import { RadioGroupState, useRadioGroupState } from "@react-stately/radio";

export interface RadioGroupProps
  extends Omit<MotionWindUIBaseProps, "radius">,
    AriaRadioGroupProps,
    Pick<HTMLElement, "className"> {
  /** A label for the radio group */
  label?: string;

  /** A description for the radio group */
  description?: string | React.ReactNode;

  /** The radio group children */
  children?: React.ReactNode;

  /** The error message content for when the radio group is invalid */
  errorMessage?: string | React.ReactNode;

  /** The label ID */
  labelId?: string;

  /** The list of classes per slot */
  classList?: SlotClassess<RadioGroupSlots>;
}

export type RadioGroupContextType = {
  /** The state of the radio component */
  state?: RadioGroupState;

  /** The color of the radio group */
  color?: RadioGroupProps["color"];

  /** The size of the radio group */
  size?: RadioGroupProps["size"];

  /** Whether or not the group is disabled */
  isDisabled?: RadioGroupProps["isDisabled"];

  /** Whether or not the group is invalid */
  isInvalid?: RadioGroupProps["isInvalid"];

  /** Whether or not the group is read-only */
  isReadOnly?: RadioGroupProps["isReadOnly"];

  /** Disables the radio group animations */
  disableAnimations?: RadioGroupProps["disableAnimations"];

  /** The radio group's validation behavior */
  validationBehavior?: RadioGroupProps["validationBehavior"];
};

const RadioGroup = React.forwardRef(
  (props: RadioGroupProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const {
      children,
      label,
      description,
      errorMessage,
      validationBehavior,
      color,
      size,
      disableAnimations,
    } = props;

    // Set up the state of the
    const state = useRadioGroupState(props);
    const { radioGroupProps, descriptionProps, labelProps } = useRadioGroup(props, state);

    const context: RadioGroupContextType = useMemo(
      () => ({
        state,
        color,
        size,
        disableAnimations,
        validationBehavior,
      }),
      [
        state,
        color,
        size,
        disableAnimations,
        validationBehavior,
        state.isRequired,
        state.isDisabled,
        state.isInvalid,
        state.isReadOnly,
      ],
    );

    return (
      <div>
        <RadioGroupProvider value={context}></RadioGroupProvider>
      </div>
    );
  },
);

RadioGroup.displayName = "MotionWindUI.RadioGroup";

export default RadioGroup;
