import { ArrowUpRightIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowUpRightIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowUpRightIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ArrowUpRightIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ArrowUpRightIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
