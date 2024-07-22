import { XCircleIcon as IconFilled } from "@heroicons/react/24/solid";
import { XCircleIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type XCircleIconProps = IconSvgProps & {
    filled?: boolean;
};

export const XCircleIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: XCircleIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
