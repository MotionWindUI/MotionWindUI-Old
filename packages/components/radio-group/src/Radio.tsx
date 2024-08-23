import React, { useMemo } from "react";
import { MotionWindUIBaseProps } from "@motionwindui/base";
import {
  Radio as RACRadio,
  RadioProps as RACRadioProps,
  RadioContext,
  useContextProps,
} from "react-aria-components";
import { useMotionWindUI } from "@motionwindui/provider";
import { warn } from "@motionwindui/dev-utils";
import { radioStyles } from "../../../core/theme/src/components/radio";
import { useRadioGroup } from "./RadioGroupContext";
import { useId } from "react-aria";

export interface RadioProps extends Omit<MotionWindUIBaseProps, "radius">, RACRadioProps {
  /* The children to be used as the label */
  children?: React.ReactNode | string;

  /* The description of the radio */
  description?: React.ReactNode | string;

  /* If a custom label is provided, then the label ID to use for aria-labledby */
  labelId?: string;

  /* If a custom description message is provided, then the label ID to use for aria-describedby */
  descriptionId?: string;
}

const Radio = React.forwardRef((props: RadioProps, ref: React.ForwardedRef<HTMLLabelElement>) => {
  const [contextProps, contextRef] = useContextProps(props, ref, RadioContext);

  // Get the global and group context
  const globalProvider = useMotionWindUI();
  const radioGroup = useRadioGroup();

  const {
    color = radioGroup?.color ?? "neutral",
    size = radioGroup?.size ?? "md",
    disableAnimations = globalProvider.disableAnimations || radioGroup?.disableAnimations || false,
    description: descriptionProp,
    isDisabled = false,
    labelId: labelIdProp,
    descriptionId: descriptionIdProp,
    children,
    ...rest
  } = contextProps;

  // Check if neither a child or label ID was provided
  // If so, then warn the user they need to provide one
  if (!props.children && !props["aria-labelledby"] && !labelIdProp) {
    warn("If no children are provided, then you must provide an aria-labelledby prop.", "Radio");
  }

  // Get the styles for the radio
  const { base, wrapper, control, label, labelWrapper, description } = useMemo(
    () =>
      radioStyles({
        color,
        size,
        isDisabled,
        disableAnimations,
      }),
    [color, size, isDisabled, disableAnimations],
  );

  return <div></div>;
});

Radio.displayName = "MotionWindUI.Radio";

export default Radio;
