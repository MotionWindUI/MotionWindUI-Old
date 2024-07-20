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
        >
            Click Me
        </button>
    );
}

export default Button;
