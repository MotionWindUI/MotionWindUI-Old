import { PlayPauseIcon as IconFilled } from "@heroicons/react/24/solid";
import { PlayPauseIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type PlayPauseIconProps = IconSvgProps & {
    filled?: boolean;
};

export const PlayPauseIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: PlayPauseIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
