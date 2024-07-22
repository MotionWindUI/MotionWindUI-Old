import { ArrowRightCircleIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowRightCircleIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowRightCircleIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ArrowRightCircleIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ArrowRightCircleIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
