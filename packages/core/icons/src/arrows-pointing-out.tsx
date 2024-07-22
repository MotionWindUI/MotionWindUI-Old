import { ArrowsPointingOutIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowsPointingOutIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowsPointingOutIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ArrowsPointingOutIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ArrowsPointingOutIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
