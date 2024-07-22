import { CheckCircleIcon as IconFilled } from "@heroicons/react/24/solid";
import { CheckCircleIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type CheckCircleIconProps = IconSvgProps & {
    filled?: boolean;
};

export const CheckCircleIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: CheckCircleIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
