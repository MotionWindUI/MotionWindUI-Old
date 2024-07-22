import { HandThumbDownIcon as IconFilled } from "@heroicons/react/24/solid";
import { HandThumbDownIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type HandThumbDownIconProps = IconSvgProps & {
    filled?: boolean;
};

export const HandThumbDownIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: HandThumbDownIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
