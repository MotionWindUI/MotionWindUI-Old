import { ArrowUpCircleIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowUpCircleIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowUpCircleIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ArrowUpCircleIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ArrowUpCircleIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
