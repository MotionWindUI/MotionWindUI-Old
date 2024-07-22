import { ClockIcon as IconFilled } from "@heroicons/react/24/solid";
import { ClockIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ClockIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ClockIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ClockIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
