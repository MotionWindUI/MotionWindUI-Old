import { ArrowsRightLeftIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowsRightLeftIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowsRightLeftIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ArrowsRightLeftIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ArrowsRightLeftIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
