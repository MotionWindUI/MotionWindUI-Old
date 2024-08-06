import React, { cloneElement, isValidElement } from "react";
import { MotionWindUIBaseProps } from "@motionwindui/base";
import { checkBoxStyles } from "../../../core/theme/src/components/checkbox";
import {
  CheckboxContext,
  Checkbox as RACCheckbox,
  CheckboxProps as RACCheckboxProps,
  useContextProps,
} from "react-aria-components";
import { CheckIcon } from "@motionwindui/heroicons-icons";

export interface CheckboxProps extends MotionWindUIBaseProps, Omit<RACCheckboxProps, "children"> {
  /* Whether or not to include the checkbox label */
  includeLabel?: boolean;

  /* The children to be used as the label */
  children?: React.ReactNode;

  /* The icon to display in the checkbox */
  icon?: React.ReactNode;

  /* Disables all animation */
  disableAnimation?: boolean;
}

const Checkbox = React.forwardRef(
  (props: CheckboxProps, ref: React.ForwardedRef<HTMLLabelElement>) => {
    [props, ref] = useContextProps(props, ref, CheckboxContext);

    const {
      color = "neutral",
      size = "md",
      radius = "none",
      includeLabel = true,
      disableAnimation = false,
      icon: checkBoxIcon = <CheckIcon />,
      children,
    } = props;

    const { base, wrapper, label, icon } = checkBoxStyles({
      color,
      size,
      radius,
      disableAnimation,
    });

    const iconClone = (icon: React.ReactNode) =>
      isValidElement(icon)
        ? cloneElement(icon, {
            // @ts-ignore
            "aria-hidden": true,
            tabIndex: -1,
            focusable: false,
          })
        : null;

    const checkedIcon = iconClone(checkBoxIcon);

    return (
      <RACCheckbox className={base()} {...props}>
        {({ isSelected, ...renderProps }) => (
          <>
            <div className={wrapper({ isSelected, ...renderProps })}>
              <span className={icon({ isSelected })}>{checkedIcon}</span>
            </div>
            {includeLabel && <span className={label()}>{children}</span>}
          </>
        )}
      </RACCheckbox>
    );
  },
);

Checkbox.displayName = "MotionWindUI.Checkbox";

export default Checkbox;
