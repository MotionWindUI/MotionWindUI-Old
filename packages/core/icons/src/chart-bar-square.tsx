import { ChartBarSquareIcon as IconFilled } from "@heroicons/react/24/solid";
import { ChartBarSquareIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ChartBarSquareIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ChartBarSquareIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ChartBarSquareIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
