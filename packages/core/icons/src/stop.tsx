import { StopIcon as IconFilled } from "@heroicons/react/24/solid";
import { StopIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type StopIconProps = IconSvgProps & {
    filled?: boolean;
};

export const StopIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: StopIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
