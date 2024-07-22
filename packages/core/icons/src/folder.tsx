import { FolderIcon as IconFilled } from "@heroicons/react/24/solid";
import { FolderIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type FolderIconProps = IconSvgProps & {
    filled?: boolean;
};

export const FolderIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: FolderIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
