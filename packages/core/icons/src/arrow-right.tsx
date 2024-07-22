import { ArrowRightIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowRightIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowRightIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ArrowRightIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ArrowRightIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
