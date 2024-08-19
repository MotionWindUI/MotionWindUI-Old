import React, { cloneElement, ReactElement, useMemo } from "react";
import { MotionWindUIBaseProps } from "@motionwindui/base";
import { CheckboxSlots, checkBoxStyles } from "@motionwindui/theme";
import {
  CheckboxContext,
  Checkbox as RACCheckbox,
  CheckboxProps as RACCheckboxProps,
  CheckboxContext as RACCheckboxContent,
  useContextProps,
  FieldError,
} from "react-aria-components";
import { CheckboxIcon, CheckboxIconProps } from "./CheckboxIcon";
import { SlotClassess } from "@motionwindui/theme";
import { clsxMerge } from "@motionwindui/theme/src/utils/clsxMerge";
import { useMotionWindUI } from "@motionwindui/provider";
import { useCheckboxGroup } from "./CheckboxGroupContext";
import { useId } from "react-aria";

export interface CheckboxProps extends MotionWindUIBaseProps, Omit<RACCheckboxProps, "children"> {
  /* Whether or not to include the checkbox label */
  includeLabel?: boolean;

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

  /* Use React Aria's native FieldError component */
  useFieldError?: boolean;

  /* Errors that are shown for validation */
  fieldError?: ReactElement<typeof FieldError>;

  /* The individual slots to apply extra styling to */
  classNames?: SlotClassess<CheckboxSlots>;
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
      includeLabel = true,
      disableAnimation = globalProvider.disableAnimations || checkboxGroup?.disableAnimations,
      icon: checkBoxIcon = <CheckboxIcon />,
      description: descriptionProp,
      isIndeterminate,
      isReadOnly,
      isDisabled,
      isInvalid,
      isRequired,
      fieldError: fieldErrorProp,
      useFieldError = false,
      errorMessage,
      className,
      classNames,
      children,
      validationBehavior = globalProvider.validationBehavior ||
        checkboxGroup?.validationBehavior ||
        "aria",
    } = props;

    const {
      base,
      wrapper,
      label,
      icon,
      description,
      fieldError: fieldErrorStyle,
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
    let descriptionId = useId();
    let errorMessageId = useId();
    let labelId = useId();

    // If the description is provided, we need to set the descriptionId and add our styles
    const cloneErrorMessage = (errorMessageContent?: React.ReactNode | string) => {
      return typeof errorMessageContent === "string" ? (
        <small className={fieldErrorStyle()} id={errorMessageId}>
          {errorMessageContent as string}
        </small>
      ) : (
        cloneElement(errorMessageContent as React.ReactElement, {
          className: fieldErrorStyle(),
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
          "aria-describedby": descriptionId,
          "aria-errormessage": errorMessageId,
        }}
      >
        <div className="inline-flex flex-col">
          <RACCheckbox
            className={base({ className: clsxMerge(classNames?.base, className) })}
            {...props}
            ref={ref}
            validationBehavior={validationBehavior}
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
                {includeLabel && (
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
          {useFieldError &&
            fieldErrorProp &&
            cloneElement(fieldErrorProp as ReactElement, { className: fieldErrorStyle() })}
          {isInvalid && errorMessage && cloneErrorMessage(errorMessage)}
        </div>
      </RACCheckboxContent.Provider>
    );
  },
);

Checkbox.displayName = "MotionWindUI.Checkbox";

export default Checkbox;
