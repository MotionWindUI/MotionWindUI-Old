import { ArrowTrendingUpIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowTrendingUpIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowTrendingUpIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ArrowTrendingUpIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ArrowTrendingUpIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
