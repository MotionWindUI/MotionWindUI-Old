import { ClipboardIcon as IconFilled } from "@heroicons/react/24/solid";
import { ClipboardIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ClipboardIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ClipboardIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ClipboardIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
