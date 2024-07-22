import { PhotoIcon as IconFilled } from "@heroicons/react/24/solid";
import { PhotoIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type PhotoIconProps = IconSvgProps & {
    filled?: boolean;
};

export const PhotoIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: PhotoIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
