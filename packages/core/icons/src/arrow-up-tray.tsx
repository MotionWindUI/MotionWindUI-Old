import { ArrowUpTrayIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowUpTrayIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowUpTrayIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ArrowUpTrayIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ArrowUpTrayIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
