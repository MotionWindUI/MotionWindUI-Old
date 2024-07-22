import { ComputerDesktopIcon as IconFilled } from "@heroicons/react/24/solid";
import { ComputerDesktopIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ComputerDesktopIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ComputerDesktopIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ComputerDesktopIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
