import { useToggleState } from "react-stately";
import { MotionWindUIBaseProps } from "@motionwindui/base";
import { useMotionWindUI } from "@motionwindui/provider";
import React, { cloneElement, isValidElement, useCallback, useMemo } from "react";
import {
  AriaSwitchProps,
  useFocusRing,
  useHover,
  useSwitch as useRASwitch,
  mergeProps,
  usePress,
} from "react-aria";
import { SlotClasses, SwitchSlots, switchStyles } from "@motionwindui/theme";
import { Booleanish, dataAttr } from "@motionwindui/aria-utils";
import { clsxMerge, DEV_MODE, warn } from "@motionwindui/dev-utils";
import { mergeRefs } from "@motionwindui/react-utils";

type PropsDiv = React.HTMLProps<HTMLDivElement> & {
  mergeClassNames?: boolean;
};

type Props = React.HTMLProps<HTMLElement> & {
  mergeClassNames?: boolean;
};

type PropsLabel = React.HTMLProps<HTMLLabelElement> & {
  mergeClassNames?: boolean;
};

type RootComponentProps = Partial<React.HTMLProps<HTMLElement>> & {
  "data-focused": Booleanish;
  "data-focused-visible": Booleanish;
  "data-hover": Booleanish;
  "data-disabled": Booleanish;
  "data-readonly": Booleanish;
  "data-selected": Booleanish;
  "data-pressed": Booleanish;
};

export interface SwitchProps
  extends MotionWindUIBaseProps,
    Omit<AriaSwitchProps, "children">,
    Partial<Pick<HTMLElement, "className">> {
  /** The forwarded ref */
  ref?: React.Ref<HTMLInputElement>;

  /** The slot classes for the switch. */
  classList?: SlotClasses<SwitchSlots>;

  /** The label of the switch */
  children?: React.ReactNode;

  /** The content to go at the beginning in the track */
  startContent?: React.ReactNode;

  /** The content to go at the end in the track */
  endContent?: React.ReactNode;

  /** The content to go in the thumb */
  thumbContent?: React.ReactNode;

  /** The description of the input */
  description?: string | React.ReactNode;
}

export const useSwitch = (props: SwitchProps) => {
  const globalContext = useMotionWindUI();

  const {
    ref,
    asRoot = "label",
    color = "neutral",
    size = "md",
    radius = "full",
    isDisabled: isDisabledProp = false,
    isReadOnly: isReadOnlyProp = false,
    disableAnimations = globalContext.disableAnimations ?? false,
    classList,
    className,
    children,
    startContent: startContentProp,
    endContent: endContentProp,
    thumbContent: thumbContentProp,
    description: descriptionProp,
  } = props;

  // Warn the developer if a label is not provided
  if (!children && !props["aria-label"] && !props["aria-labelledby"] && DEV_MODE) {
    warn("Label is not provided, so an aria-label or an aria-labelledby must be passed", "Switch");
  }
  // Set up the root element for the switch
  const RootComponent = asRoot;

  let state = useToggleState(props);
  let inputRef = React.useRef<HTMLInputElement>(null);
  const {
    inputProps: inputPropsRA,
    labelProps: labelPropsRA,
    isDisabled: isDisabledRA,
    isPressed: isPressedRA,
    isReadOnly: isReadOnlyRA,
    isSelected: isSelectedRA,
  } = useRASwitch(props, state, inputRef);

  // Set up the memoized states for the switch
  const isDisabled = useMemo(
    () => isDisabledProp || inputPropsRA.disabled || isDisabledRA,
    [isDisabledProp, inputPropsRA.disabled, isDisabledRA],
  );
  const isReadOnly = useMemo(
    () => isReadOnlyProp || inputPropsRA.readOnly || isReadOnlyRA,
    [isReadOnlyProp, inputPropsRA.readOnly, isReadOnlyRA],
  );
  const isInteractive = useMemo(() => !isDisabled && !isReadOnly, [isDisabled, isReadOnly]);
  const isSelected = useMemo(() => isSelectedRA, [isSelectedRA]);

  // Set up hover and focus states
  const { focusProps, isFocusVisible, isFocused } = useFocusRing({ autoFocus: props.autoFocus });
  const { hoverProps, isHovered } = useHover({ isDisabled: !isInteractive });
  const { pressProps, isPressed: isPressedUP } = usePress({ isDisabled: !isInteractive });

  // Merge the press props
  const isPressed = useMemo(() => isPressedRA || isPressedUP, [isPressedRA, isPressedUP]);

  const styles = useMemo(
    () => switchStyles({ color, size, radius, isDisabled, isReadOnly, disableAnimations }),
    [color, size, radius, isInteractive, isDisabled, isReadOnly, disableAnimations],
  );

  /**
   * The root props for the switch.
   */
  const rootProps = useCallback(
    (props?: PropsLabel): RootComponentProps => {
      // Allow the developer to pass in even more specific classes if using the useInput hook
      const { className: customClasses, mergeClassNames = true, ...otherProps } = props || {};

      const classNameProp = mergeClassNames
        ? styles.root({ className: clsxMerge(classList?.root, className, customClasses) })
        : customClasses;

      return {
        ...otherProps,
        className: classNameProp,
        "data-disabled": dataAttr(isDisabled),
        "data-readonly": dataAttr(isReadOnly),
        "data-focused": dataAttr(isFocused),
        "data-focused-visible": dataAttr(isFocusVisible),
        "data-hover": dataAttr(isHovered),
        "data-selected": dataAttr(isSelected),
        "data-pressed": dataAttr(isPressed),
      };
    },
    [
      classList?.root,
      className,
      isDisabled,
      isReadOnly,
      isFocused,
      isFocusVisible,
      isHovered,
      isSelected,
      isPressed,
    ],
  );

  /**
   * The input props for the switch. This is the input element that is visually hidden from the user.
   */
  const inputProps = useCallback(
    (props?: Props): React.HTMLProps<HTMLInputElement> => {
      // The input element is not shown to the user, so we don't need to merge class names
      return {
        ...mergeProps(props, inputPropsRA, focusProps, hoverProps),
        ref: mergeRefs(inputRef, ref),
      };
    },
    [inputPropsRA],
  );

  /**
   * The wrapper props for the switch. This wraps the switch input, label, track, and description.
   */
  const wrapperProps = useCallback(
    (props?: PropsDiv): React.HTMLProps<HTMLDivElement> => {
      // Allow the developer to pass in even more specific classes if using the useInput hook
      const { className: customClasses, mergeClassNames = true, ...otherProps } = props || {};

      const classNameProp = mergeClassNames
        ? styles.wrapper({ className: clsxMerge(classList?.wrapper, customClasses) })
        : customClasses;

      return {
        ...otherProps,
        className: classNameProp,
      };
    },
    [classList?.wrapper],
  );

  /**
   * The track props for the switch. This is the track of the switch. Wraps the thumb, with the start and end content with any thumb content.
   */
  const trackProps = useCallback(
    (props?: PropsDiv): React.HTMLProps<HTMLDivElement> => {
      // Allow the developer to pass in even more specific classes if using the useInput hook
      const { className: customClasses, mergeClassNames = true, ...otherProps } = props || {};

      const classNameProp = mergeClassNames
        ? styles.track({ className: clsxMerge(classList?.track, customClasses) })
        : customClasses;

      return {
        ...mergeProps(otherProps, hoverProps, pressProps),
        className: classNameProp,
      };
    },
    [classList?.track],
  );

  /**
   * The thumb props for the switch. This is the thumb of the switch.
   */
  const thumbProps = useCallback(
    (props?: PropsDiv): React.HTMLProps<HTMLDivElement> => {
      // Allow the developer to pass in even more specific classes if using the useInput hook
      const { className: customClasses, mergeClassNames = true, ...otherProps } = props || {};

      const classNameProp = mergeClassNames
        ? styles.thumb({ className: clsxMerge(classList?.thumb, customClasses) })
        : customClasses;

      return {
        ...mergeProps(otherProps, pressProps, hoverProps),
        className: classNameProp,
      };
    },
    [classList?.thumb],
  );

  /**
   * The label props for the switch. This is the label of the switch.
   */
  const labelProps = useCallback(
    (props?: Props): React.HTMLProps<HTMLElement> => {
      // Allow the developer to pass in even more specific classes if using the useInput hook
      const { className: customClasses, mergeClassNames = true, ...otherProps } = props || {};

      const classNameProp = mergeClassNames
        ? styles.label({ className: clsxMerge(classList?.label, customClasses) })
        : customClasses;

      return {
        ...mergeProps(otherProps, hoverProps, pressProps, labelPropsRA),
        className: classNameProp,
      };
    },
    [classList?.label, hoverProps, pressProps, isHovered, isPressed],
  );

  /**
   * Clones the icon and adds the necessary props
   * @param icon The icon to clone
   * @returns The returned cloned icon
   */
  const iconClone = (icon: React.ReactNode, contentStyle: string) =>
    isValidElement(icon)
      ? cloneElement(icon, {
          // @ts-ignore
          "aria-hidden": true,
          tabIndex: -1,
          focusable: false,
          className: contentStyle,
        })
      : null;

  const cloneDescription = (description?: string | React.ReactNode) => {
    if (!description) return null;

    return typeof description === "string"
      ? React.createElement(
          "span",
          { className: styles.description({ className: classList?.description }) },
          description,
        )
      : description;
  };

  const description = useMemo(() => cloneDescription(descriptionProp), [descriptionProp]);

  const startContent = useMemo(
    () => iconClone(startContentProp, styles.startContent()),
    [startContentProp],
  );
  const endContent = useMemo(
    () => iconClone(endContentProp, styles.endContent()),
    [endContentProp],
  );
  const thumbContent = useMemo(
    () => iconClone(thumbContentProp, styles.thumbContent()),
    [thumbContentProp],
  );

  return {
    RootComponent,
    children,
    startContent,
    endContent,
    thumbContent,
    description,
    rootProps,
    inputProps,
    wrapperProps,
    trackProps,
    thumbProps,
    labelProps,
  };
};
