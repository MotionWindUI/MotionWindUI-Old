import { FolderMinusIcon as IconFilled } from "@heroicons/react/24/solid";
import { FolderMinusIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type FolderMinusIconProps = IconSvgProps & {
    filled?: boolean;
};

export const FolderMinusIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: FolderMinusIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
