import { buttonStyles } from "@motionwindui/theme/src/components/button";
import React, { ComponentPropsWithoutRef } from "react";
import { VariantProps } from "class-variance-authority";
import { clsxMerge } from "@motionwindui/theme/src/utils/clsxMerge";

type ButtonElementProps = ComponentPropsWithoutRef<"button">;

export interface ButtonProps
    extends VariantProps<typeof buttonStyles>,
        Omit<ButtonElementProps, "color"> {
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
    disabled?: boolean;
}

function Button({
    color = "neutral",
    variant = "solid",
    size = "md",
    radius = "md",
    disabled = false,
    startContent,
    endContent,
    children,
    ...props
}: ButtonProps) {
    return (
        <button
            className={clsxMerge(
                buttonStyles({
                    color,
                    variant,
                    size,
                    isInGroup: false,
                    radius,
                }),
            )}
            disabled={disabled}
            {...props}
        >
            {startContent}
            {children}
            {endContent}
        </button>
    );
}

export default Button;
