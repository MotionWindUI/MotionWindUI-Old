import { ArchiveBoxIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArchiveBoxIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArchiveBoxIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ArchiveBoxIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ArchiveBoxIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
