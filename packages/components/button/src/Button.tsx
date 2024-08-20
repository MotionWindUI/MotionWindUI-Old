import React, { cloneElement, isValidElement } from "react";
import {
  ButtonContext,
  composeRenderProps,
  Button as RACButton,
  ButtonProps as RACButtonProps,
  useContextProps,
} from "react-aria-components";
import { MotionWindUIBaseProps } from "@motionwindui/base";
import { useMotionWindUI } from "@motionwindui/provider";
import { buttonStyles } from "@motionwindui/theme";
import { useButtonGroupContext } from "./ButtonGroupContext";

export interface ButtonProps extends MotionWindUIBaseProps, Omit<RACButtonProps, "children"> {
  /** The variant of the button */
  variant?: "solid" | "faded" | "bordered" | "ghost" | "light";

  /** The icon to display before the content */
  startContent?: React.ReactNode;

  /** The icon to display after the content */
  endContent?: React.ReactNode;

  /** Shadow */
  shadow?: boolean;

  /** Is icon only */
  isIconOnly?: boolean;

  /** Is loading */
  isLoading?: boolean;

  /** The option to always show children (when provided) even in icon only */
  alwaysShowChildren?: boolean;

  /** React children */
  children?: React.ReactNode;
}

const Button = React.forwardRef(
  (props: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const globalContext = useMotionWindUI();
    const buttonGroup = useButtonGroupContext();
    const isInGroup = !!buttonGroup;

    const {
      color = buttonGroup?.color ?? "neutral",
      variant = buttonGroup?.variant ?? "solid",
      size = buttonGroup?.size ?? "md",
      radius = buttonGroup?.radius ?? "md",
      startContent: startContentProp,
      endContent: endContentProp,
      isIconOnly = false,
      isDisabled: isDisabledProp = buttonGroup?.isDisabled ?? false,
      isLoading = false,
      shadow = buttonGroup?.shadow ?? false,
      disableAnimations = globalContext.disableAnimations || buttonGroup?.disableAnimations,
      alwaysShowChildren = false,
      children,
      className,
    } = props;

    const isDisabled = isDisabledProp || isLoading;

    [props, ref] = useContextProps(props, ref, ButtonContext);

    const iconClone = (icon: React.ReactNode) =>
      isValidElement(icon)
        ? cloneElement(icon, {
            // @ts-ignore
            "aria-hidden": true,
            tabIndex: -1,
            focusable: false,
          })
        : null;

    let startContent = iconClone(startContentProp);
    let endContent = iconClone(endContentProp);

    return (
      <RACButton
        ref={ref}
        className={composeRenderProps(className, (className, renderProps) =>
          buttonStyles({
            ...renderProps,
            variant,
            color,
            size,
            radius,
            isInGroup,
            isIconOnly,
            disableAnimations,
            isDisabled,
            shadow,
            className,
          }),
        )}
        {...props}
      >
        {startContent}
        {alwaysShowChildren || !isIconOnly ? children : null}
        {endContent}
      </RACButton>
    );
  },
);

Button.displayName = "MotionWindUI.Button";

export default Button;
