import { ArrowLeftStartOnRectangleIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowLeftStartOnRectangleIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowLeftStartOnRectangleIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ArrowLeftStartOnRectangleIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ArrowLeftStartOnRectangleIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
