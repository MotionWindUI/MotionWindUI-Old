import { EyeDropperIcon as IconFilled } from "@heroicons/react/24/solid";
import { EyeDropperIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type EyeDropperIconProps = IconSvgProps & {
    filled?: boolean;
};

export const EyeDropperIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: EyeDropperIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
