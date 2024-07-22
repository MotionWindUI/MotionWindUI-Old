import { PresentationChartBarIcon as IconFilled } from "@heroicons/react/24/solid";
import { PresentationChartBarIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type PresentationChartBarIconProps = IconSvgProps & {
    filled?: boolean;
};

export const PresentationChartBarIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: PresentationChartBarIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
