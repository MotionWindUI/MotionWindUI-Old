import { ArrowRightStartOnRectangleIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowRightStartOnRectangleIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowRightStartOnRectangleIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ArrowRightStartOnRectangleIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ArrowRightStartOnRectangleIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
