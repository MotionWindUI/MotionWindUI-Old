import React, { cloneElement, isValidElement, useCallback, useMemo, useRef } from "react";
import { MotionWindUIBaseProps } from "@motionwindui/base";
import {
  useButton as useRACButton,
  AriaButtonProps,
  useHover,
  useFocusRing,
  usePress,
  mergeProps,
} from "react-aria";
import { mergeRefs } from "@motionwindui/react-utils";
import { useButtonGroupContext } from "./ButtonGroupContext";
import { buttonStyles } from "@motionwindui/theme";
import { useMotionWindUI } from "@motionwindui/provider";
import { Booleanish, dataAttr } from "@motionwindui/aria-utils";

type RootComponentProps = Partial<React.HTMLProps<HTMLElement>> & {
  "data-disabled"?: Booleanish;
  "data-loading"?: Booleanish;
  "data-hover"?: Booleanish;
  "data-focus"?: Booleanish;
  "data-pressed"?: Booleanish;
  "data-focus-visible"?: Booleanish;
};

export interface ButtonProps
  extends MotionWindUIBaseProps,
    Omit<AriaButtonProps, "children">,
    Partial<Pick<HTMLButtonElement, "className">> {
  /** The HTML DOM reference to the button */
  ref?: React.Ref<HTMLButtonElement>;

  /** The variant of the button */
  variant?: "solid" | "faded" | "bordered" | "ghost" | "light";

  /** The icon to display before the content */
  startContent?: React.ReactNode;

  /** The icon to display after the content */
  endContent?: React.ReactNode;

  /** Is icon only */
  isIconOnly?: boolean;

  /** Is loading */
  isLoading?: boolean;

  /** React children */
  children?: React.ReactNode;
}

export const useButton = (props: ButtonProps) => {
  const globalContext = useMotionWindUI();
  const groupContext = useButtonGroupContext();

  const {
    asRoot,
    ref,
    color = groupContext?.color ?? "neutral",
    variant = groupContext?.variant ?? "solid",
    size = groupContext?.size ?? "md",
    radius = groupContext?.radius ?? "md",
    disableAnimations = globalContext?.disableAnimations ??
      groupContext?.disableAnimations ??
      false,
    startContent: startContentProp,
    endContent: endContentProp,
    isIconOnly,
    isDisabled: isDisabledProp,
    isLoading: isLoadingProp,
    children,
    className,
    ...otherProps
  } = props;

  const Root = asRoot || "button";

  let domRef = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useRACButton(otherProps, domRef);

  const isDisabled = isDisabledProp || buttonProps.disabled;
  const isLoading = isLoadingProp;
  const isInteractive = !isDisabled && !isLoading;

  const { hoverProps, isHovered } = useHover({
    isDisabled: !isInteractive,
  });

  const { focusProps, isFocusVisible, isFocused } = useFocusRing({
    autoFocus: buttonProps.autoFocus,
  });

  const { pressProps, isPressed } = usePress({
    isDisabled: !isInteractive,
  });

  const styles = useMemo(
    () =>
      buttonStyles({
        variant,
        color,
        size,
        radius,
        isInGroup: !!groupContext,
        isIconOnly,
        isDisabled: !isInteractive,
        disableAnimations,
        className,
      }),
    [
      variant,
      color,
      size,
      radius,
      groupContext,
      isIconOnly,
      isDisabledProp,
      buttonProps.disabled,
      className,
    ],
  );

  const rootProps = useCallback((): RootComponentProps => {
    return {
      "data-disabled": dataAttr(isInteractive),
      "data-loading": dataAttr(isLoading),
      "data-hover": dataAttr(isHovered),
      "data-focus": dataAttr(isFocused),
      "data-pressed": dataAttr(isPressed),
      "data-focus-visible": dataAttr(isFocusVisible),
      "aria-pressed": dataAttr(isPressed),
      className: styles,
      ...mergeProps(otherProps, buttonProps, hoverProps, focusProps, pressProps),
      ref: mergeRefs(domRef, ref),
    };
  }, [
    variant,
    color,
    size,
    radius,
    groupContext,
    isIconOnly,
    isDisabledProp,
    buttonProps.disabled,
    className,
    isInteractive,
    isLoading,
    isHovered,
    isFocused,
    isPressed,
    isFocusVisible,
  ]);

  /**
   * Clones the icon and adds the necessary props
   * @param icon The icon to clone
   * @returns The returned cloned icon
   */
  const iconClone = (icon: React.ReactNode) =>
    isValidElement(icon)
      ? cloneElement(icon, {
          // @ts-ignore
          "aria-hidden": true,
          tabIndex: -1,
          focusable: false,
        })
      : null;

  const startContent = iconClone(startContentProp);
  const endContent = iconClone(endContentProp);

  return {
    Root,
    children,
    startContent,
    endContent,
    rootProps,
  };
};
