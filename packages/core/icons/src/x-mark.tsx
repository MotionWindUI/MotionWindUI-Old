import { XMarkIcon as IconFilled } from "@heroicons/react/24/solid";
import { XMarkIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type XMarkIconProps = IconSvgProps & {
    filled?: boolean;
};

export const XMarkIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: XMarkIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
