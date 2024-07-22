import { ArchiveBoxXMarkIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArchiveBoxXMarkIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArchiveBoxXMarkIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ArchiveBoxXMarkIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ArchiveBoxXMarkIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
