import React, { cloneElement, useMemo } from "react";
import { MotionWindUIBaseProps } from "@motionwindui/base";
import { CheckboxSlots, checkBoxStyles } from "@motionwindui/theme";
import {
  CheckboxContext,
  Checkbox as RACCheckbox,
  CheckboxProps as RACCheckboxProps,
  CheckboxContext as RACCheckboxContent,
  useContextProps,
} from "react-aria-components";
import { CheckboxIcon, CheckboxIconProps } from "./CheckboxIcon";
import { SlotClassess } from "@motionwindui/theme";
import { clsxMerge } from "@motionwindui/theme/src/utils/clsxMerge";
import { useMotionWindUI } from "@motionwindui/provider";
import { useCheckboxGroup } from "./CheckboxGroupContext";
import { useId } from "react-aria";

export interface CheckboxProps extends MotionWindUIBaseProps, Omit<RACCheckboxProps, "children"> {
  /* A description of the input (if desired) */
  description?: string;

  /* The children to be used as the label */
  children?: React.ReactNode;

  /* The icon to display in the checkbox */
  icon?: React.ReactNode;

  /* Disables all animation */
  disableAnimation?: boolean;

  /* The error message content to display */
  errorMessage?: React.ReactNode | string;

  /* The individual slots to apply extra styling to */
  classNames?: SlotClassess<CheckboxSlots>;

  /* If a custom label is provided, then the label ID to use for aria-labledby */
  labelId?: string;

  /* If a custom description message is provided, then the label ID to use for aria-describedby */
  descriptionId?: string;

  /* If a custom error message is provided, then the label ID to use for aria-errormessage */
  errorMessageId?: string;
}

const Checkbox = React.forwardRef(
  (props: CheckboxProps, ref: React.ForwardedRef<HTMLLabelElement>) => {
    [props, ref] = useContextProps(props, ref, CheckboxContext);

    // Get the global context
    const globalProvider = useMotionWindUI();
    const checkboxGroup = useCheckboxGroup();

    const {
      color = checkboxGroup?.color ?? "neutral",
      size = checkboxGroup?.size ?? "md",
      radius = checkboxGroup?.radius ?? "none",
      disableAnimation = globalProvider.disableAnimations || checkboxGroup?.disableAnimation,
      icon: checkBoxIcon = <CheckboxIcon />,
      description: descriptionProp,
      isIndeterminate,
      isReadOnly,
      isDisabled,
      isInvalid,
      isRequired,
      errorMessage,
      className,
      classNames,
      children,
      validationBehavior = globalProvider.validationBehavior ||
        checkboxGroup?.validationBehavior ||
        "aria",
      labelId: labelIdProp,
      descriptionId: descriptionIdProp,
      errorMessageId: errorMessageIdProp,
      "aria-label": ariaLabel,
    } = props;

    // First, check if neither a child or label ID is provided
    // If so, then warn the user that they need to provide one
    if (!props.children && !ariaLabel && !labelIdProp) {
      // eslint-disable-next-line no-console
      console.warn(
        "Warning: The `Checkbox` component is missing a label. You must provide an aria-label attribute, label ID to your label, or children for accessibility.",
      );
    }

    // Get the styles for the checkbox
    // Use useMemo to only recalculate the styles when the dependencies change
    const {
      base,
      wrapper,
      label,
      icon,
      description,
      errorMessage: errorMessageStyle,
    } = useMemo(
      () =>
        checkBoxStyles({
          color,
          size,
          radius,
          isReadOnly,
          isDisabled,
          isInvalid,
          isRequired,
          disableAnimation,
        }),
      [color, size, radius, isReadOnly, isDisabled, isInvalid, isRequired, disableAnimation],
    );

    // Generate the unique ids for the description, error message, and label
    // Use the provided ids if they exist, otherwise generate new ones
    let descriptionId = descriptionIdProp ?? useId();
    let errorMessageId = errorMessageIdProp ?? useId();
    let labelId = labelIdProp ?? useId();

    // If the description is provided, we need to set the descriptionId and add our styles
    const cloneErrorMessage = (errorMessageContent?: React.ReactNode | string) => {
      return typeof errorMessageContent === "string" ? (
        <small className={errorMessageStyle()} id={errorMessageId}>
          {errorMessageContent as string}
        </small>
      ) : (
        cloneElement(errorMessageContent as React.ReactElement, {
          className: errorMessageStyle(),
          id: errorMessageId,
        })
      );
    };

    /**
     * Clones any icon passed to the checkbox to give the proper styles
     * @param isSelected Whether or not the checkbox is selected
     * @returns The cloned checkbox icon
     */
    const cloneCheckIcon = (isSelected: boolean) => {
      // The basic props for the icon
      const iconProps = {
        "aria-hidden": true,
        className: icon({ isSelected, className: classNames?.icon }),
      };

      // If the icon is a CheckboxIcon, we need to pass the isIndeterminate prop
      if (React.isValidElement(checkBoxIcon) && checkBoxIcon.type === CheckboxIcon) {
        // We casted the props to Partial<CheckboxIconProps> because we know that the icon is a CheckboxIcon
        return cloneElement(
          checkBoxIcon as React.ReactElement,
          {
            ...iconProps,
            isIndeterminate,
          } as Partial<CheckboxIconProps>,
        );
      }

      // Otherwise, we just clone the icon with the basic props
      return cloneElement(checkBoxIcon as React.ReactElement, iconProps);
    };

    return (
      <RACCheckboxContent.Provider
        value={{
          "aria-describedby": descriptionProp ? descriptionId : undefined,
          "aria-errormessage": errorMessage ? errorMessageId : undefined,
          "aria-labelledby": labelId,
        }}
      >
        <div className="inline-flex flex-col">
          <RACCheckbox
            className={base({ className: clsxMerge(classNames?.base, className) })}
            {...props}
            ref={ref}
            validationBehavior={validationBehavior}
            aria-label={ariaLabel}
          >
            {({ isSelected, isRequired, ...renderProps }) => (
              <>
                <span
                  className={wrapper({
                    isSelected,
                    ...renderProps,
                    className: classNames?.wrapper,
                  })}
                >
                  {cloneCheckIcon(isSelected)}
                </span>
                {children && (
                  <span
                    className={label({ isRequired, className: classNames?.label })}
                    id={labelId}
                  >
                    {children}
                  </span>
                )}
              </>
            )}
          </RACCheckbox>
          {descriptionProp && (
            <small
              className={description({ className: classNames?.description })}
              id={descriptionId}
            >
              {descriptionProp}
            </small>
          )}
          {isInvalid && errorMessage && cloneErrorMessage(errorMessage)}
        </div>
      </RACCheckboxContent.Provider>
    );
  },
);

Checkbox.displayName = "MotionWindUI.Checkbox";

export default Checkbox;
