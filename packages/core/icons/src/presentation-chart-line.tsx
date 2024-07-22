import { PresentationChartLineIcon as IconFilled } from "@heroicons/react/24/solid";
import { PresentationChartLineIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type PresentationChartLineIconProps = IconSvgProps & {
    filled?: boolean;
};

export const PresentationChartLineIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: PresentationChartLineIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
