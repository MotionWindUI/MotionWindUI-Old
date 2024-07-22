import { CheckBadgeIcon as IconFilled } from "@heroicons/react/24/solid";
import { CheckBadgeIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type CheckBadgeIconProps = IconSvgProps & {
    filled?: boolean;
};

export const CheckBadgeIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: CheckBadgeIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
