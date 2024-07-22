import { ArrowPathRoundedSquareIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowPathRoundedSquareIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowPathRoundedSquareIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ArrowPathRoundedSquareIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ArrowPathRoundedSquareIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
