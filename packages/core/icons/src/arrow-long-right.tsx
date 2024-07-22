import { ArrowLongRightIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowLongRightIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowLongRightIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ArrowLongRightIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ArrowLongRightIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
