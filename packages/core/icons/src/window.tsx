import { WindowIcon as IconFilled } from "@heroicons/react/24/solid";
import { WindowIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type WindowIconProps = IconSvgProps & {
    filled?: boolean;
};

export const WindowIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: WindowIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
