import { BellIcon as IconFilled } from "@heroicons/react/24/solid";
import { BellIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type BellIconProps = IconSvgProps & {
    filled?: boolean;
};

export const BellIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: BellIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
