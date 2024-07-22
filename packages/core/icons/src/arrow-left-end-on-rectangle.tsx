import { ArrowLeftEndOnRectangleIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowLeftEndOnRectangleIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowLeftEndOnRectangleIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ArrowLeftEndOnRectangleIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ArrowLeftEndOnRectangleIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
