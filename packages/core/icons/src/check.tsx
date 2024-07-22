import { CheckIcon as IconFilled } from "@heroicons/react/24/solid";
import { CheckIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type CheckIconProps = IconSvgProps & {
    filled?: boolean;
};

export const CheckIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: CheckIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
