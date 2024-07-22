import { ArrowDownTrayIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowDownTrayIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowDownTrayIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ArrowDownTrayIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ArrowDownTrayIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
