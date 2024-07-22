import { ArrowDownCircleIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowDownCircleIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowDownCircleIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ArrowDownCircleIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ArrowDownCircleIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
