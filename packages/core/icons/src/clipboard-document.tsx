import { ClipboardDocumentIcon as IconFilled } from "@heroicons/react/24/solid";
import { ClipboardDocumentIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ClipboardDocumentIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ClipboardDocumentIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ClipboardDocumentIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
