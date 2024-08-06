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

  /* The label position */
  labelPosition?: "left" | "right";
}

const Checkbox = React.forwardRef(
  (props: CheckboxProps, ref: React.ForwardedRef<HTMLLabelElement>) => {
    [props, ref] = useContextProps(props, ref, CheckboxContext);

    const {
      color = "neutral",
      size = "md",
      radius = "none",
      includeLabel = true,
      labelPosition = "left",
      children,
    } = props;

    const { base, wrapper, outsideWraper } = checkBoxStyles({ size, color, radius });

    return (
      <RACCheckbox className={base()} {...props}>
        {({ isSelected, ...renderProps }) => (
          <>
            {includeLabel && labelPosition === "right" && children}
            <div className={outsideWraper()}>
              <div className={wrapper({ isSelected, ...renderProps })}> </div>
            </div>
            {includeLabel && labelPosition === "left" && children}
          </>
        )}
      </RACCheckbox>
    );
  },
);

Checkbox.displayName = "MotionWindUI.Checkbox";

export default Checkbox;
