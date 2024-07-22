import { FolderPlusIcon as IconFilled } from "@heroicons/react/24/solid";
import { FolderPlusIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type FolderPlusIconProps = IconSvgProps & {
    filled?: boolean;
};

export const FolderPlusIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: FolderPlusIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
