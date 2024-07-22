import { RectangleStackIcon as IconFilled } from "@heroicons/react/24/solid";
import { RectangleStackIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type RectangleStackIconProps = IconSvgProps & {
    filled?: boolean;
};

export const RectangleStackIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: RectangleStackIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
