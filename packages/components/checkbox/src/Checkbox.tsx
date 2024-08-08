import React, { cloneElement, ReactElement } from "react";
import { MotionWindUIBaseProps } from "@motionwindui/base";
import { CheckboxSlots, checkBoxStyles } from "@motionwindui/theme";
import {
  CheckboxContext,
  Checkbox as RACCheckbox,
  CheckboxProps as RACCheckboxProps,
  useContextProps,
} from "react-aria-components";
import { CheckboxIcon } from "./CheckboxIcon";
import { SlotClassess } from "@motionwindui/theme";
import { clsxMerge } from "@motionwindui/theme/src/utils/clsxMerge";

export interface CheckboxProps extends MotionWindUIBaseProps, Omit<RACCheckboxProps, "children"> {
  /* Whether or not to include the checkbox label */
  includeLabel?: boolean;

  /* The children to be used as the label */
  children?: React.ReactNode;

  /* The icon to display in the checkbox */
  icon?: React.ReactNode;

  /* Disables all animation */
  disableAnimation?: boolean;

  classNames?: SlotClassess<CheckboxSlots>;
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
      icon: checkBoxIcon = <CheckboxIcon />,
      isIndeterminate,
      className,
      classNames,
      children,
    } = props;

    const { base, wrapper, label, icon } = checkBoxStyles({
      color,
      size,
      radius,
      disableAnimation,
    });

    /**
     * Clones any icon passed to the checkbox to give the proper styles
     * @param isSelected Whether or not the checkbox is selected
     * @returns The cloned checkbox icon
     */
    const cloneCheckIcon = (isSelected: boolean) => {
      return typeof checkBoxIcon === "function"
        ? (checkBoxIcon as () => React.ReactNode)()
        : cloneElement(checkBoxIcon as ReactElement, {
            "aria-hidden": true,
            className: icon({ className: classNames?.icon, isSelected }),
            isIndeterminate,
          });
    };

    return (
      <RACCheckbox
        className={base({ className: clsxMerge(classNames?.base, className) })}
        {...props}
      >
        {({ isSelected, ...renderProps }) => (
          <>
            <span
              className={wrapper({ isSelected, ...renderProps, className: classNames?.wrapper })}
            >
              {cloneCheckIcon(isSelected)}
            </span>
            {includeLabel && (
              <span className={label({ className: classNames?.label })}>{children}</span>
            )}
          </>
        )}
      </RACCheckbox>
    );
  },
);

Checkbox.displayName = "MotionWindUI.Checkbox";

export default Checkbox;
