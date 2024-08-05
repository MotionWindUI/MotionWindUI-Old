import React from "react";
import { MotionWindUIBaseProps } from "@motionwindui/base";
import { checkBoxStyles } from "../../../core/theme/src/components/checkbox";
import {
  CheckboxContext,
  Checkbox as RACCheckbox,
  CheckboxProps as RACCheckboxProps,
  useContextProps,
} from "react-aria-components";

export interface CheckboxProps extends MotionWindUIBaseProps, RACCheckboxProps {
  /* Whether or not to include the checkbox label */
  includeLabel?: boolean;

  /* The label for the checkbox */
  label?: string;

  /* The label position */
  labelPosition?: "left" | "right";
}

const Checkbox = React.forwardRef(
  (props: CheckboxProps, ref: React.ForwardedRef<HTMLLabelElement>) => {
    const {
      color = "neutral",
      size = "md",
      radius = "none",
      includeLabel = true,
      label = "Checkbox",
      labelPosition = "left",
    } = props;

    [props, ref] = useContextProps(props, ref, CheckboxContext);

    const { base } = checkBoxStyles({ color, size, radius });

    return (
      <RACCheckbox className={"inline-flex group"}>
        <div className="w-4 h-4 border-neutral border-solid border-2">
          <span className="opacity-0 scale-50 bg-primary group-data-[selected=true]:opacity-100 group-data-[selected=true]:scale-100 transition-all"></span>
        </div>
        Checkbox
      </RACCheckbox>
    );
  },
);

Checkbox.displayName = "MotionWindUI.Checkbox";

export default Checkbox;
