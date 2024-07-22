import { ArrowUpOnSquareIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowUpOnSquareIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowUpOnSquareIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ArrowUpOnSquareIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ArrowUpOnSquareIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
