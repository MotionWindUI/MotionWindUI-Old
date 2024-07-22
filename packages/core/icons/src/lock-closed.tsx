import { LockClosedIcon as IconFilled } from "@heroicons/react/24/solid";
import { LockClosedIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type LockClosedIconProps = IconSvgProps & {
    filled?: boolean;
};

export const LockClosedIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: LockClosedIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
