import { FolderOpenIcon as IconFilled } from "@heroicons/react/24/solid";
import { FolderOpenIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type FolderOpenIconProps = IconSvgProps & {
    filled?: boolean;
};

export const FolderOpenIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: FolderOpenIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
