import { ChartBarIcon as IconFilled } from "@heroicons/react/24/solid";
import { ChartBarIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ChartBarIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ChartBarIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ChartBarIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
