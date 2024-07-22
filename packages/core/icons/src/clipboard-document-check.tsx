import { ClipboardDocumentCheckIcon as IconFilled } from "@heroicons/react/24/solid";
import { ClipboardDocumentCheckIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ClipboardDocumentCheckIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ClipboardDocumentCheckIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ClipboardDocumentCheckIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
