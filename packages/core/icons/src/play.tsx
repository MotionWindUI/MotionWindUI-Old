import { PlayIcon as IconFilled } from "@heroicons/react/24/solid";
import { PlayIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type PlayIconProps = IconSvgProps & {
    filled?: boolean;
};

export const PlayIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: PlayIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
