import { BackwardIcon as IconFilled } from "@heroicons/react/24/solid";
import { BackwardIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type BackwardIconProps = IconSvgProps & {
    filled?: boolean;
};

export const BackwardIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: BackwardIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
