import {
    ButtonContext,
    composeRenderProps,
    Button as ReactAriaButton,
    ButtonProps as ReactAriaButtonProps,
    useContextProps,
} from "react-aria-components";
import {
    ButtonStyles,
    buttonStyles,
} from "@motionwindui/theme/src/components/button";
import React from "react";
import { VariantProps } from "class-variance-authority";
import { clsxMerge } from "@motionwindui/theme/src/utils/clsxMerge";

export interface ButtonProps extends ReactAriaButtonProps {
    /** The color/intentions of the button */
    color?:
        | "neutral"
        | "primary"
        | "secondary"
        | "success"
        | "warning"
        | "danger";

    /** The variant of the button */
    variant?: "solid" | "faded" | "bordered" | "ghost";

    /** The size of the button */
    size?: "sm" | "md" | "lg";

    /** The radius of the button */
    radius?: "none" | "sm" | "md" | "lg" | "full";

    /** The icon to display before the content */
    startContent?: React.ReactNode;

    /** The icon to display after the content */
    endContent?: React.ReactNode;

    /** Is in a button group */
    isInGroup?: boolean;

    /** Is disabled */
    isDisabled?: boolean;

    /** Whether or not to disable animations */
    animateDisable?: boolean;

    /** React children */
    children?: React.ReactNode;
}

const Button = React.forwardRef(
    (props: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
        const {
            color = "neutral",
            variant = "solid",
            size = "md",
            radius = "md",
            startContent,
            endContent,
            isInGroup,
            animateDisable,
            children,
            className,
        } = props;

        [props, ref] = useContextProps(props, ref, ButtonContext);

        return (
            <ReactAriaButton
                ref={ref}
                className={composeRenderProps(
                    className,
                    (className, renderProps) =>
                        buttonStyles({
                            ...renderProps,
                            variant,
                            color,
                            size,
                            radius,
                            isInGroup,
                            className,
                        }),
                )}
                {...props}
            >
                {startContent}
                {children}
                {endContent}
            </ReactAriaButton>
        );
    },
);

export default Button;
