import { FolderArrowDownIcon as IconFilled } from "@heroicons/react/24/solid";
import { FolderArrowDownIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type FolderArrowDownIconProps = IconSvgProps & {
    filled?: boolean;
};

export const FolderArrowDownIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: FolderArrowDownIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
