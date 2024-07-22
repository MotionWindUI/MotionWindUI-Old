import { PauseIcon as IconFilled } from "@heroicons/react/24/solid";
import { PauseIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type PauseIconProps = IconSvgProps & {
    filled?: boolean;
};

export const PauseIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: PauseIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
