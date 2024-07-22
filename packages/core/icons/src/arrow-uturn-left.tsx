import { ArrowUturnLeftIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowUturnLeftIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowUturnLeftIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ArrowUturnLeftIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ArrowUturnLeftIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
