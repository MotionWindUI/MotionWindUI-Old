import { ArrowTrendingDownIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowTrendingDownIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowTrendingDownIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ArrowTrendingDownIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ArrowTrendingDownIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
