import { PauseCircleIcon as IconFilled } from "@heroicons/react/24/solid";
import { PauseCircleIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type PauseCircleIconProps = IconSvgProps & {
    filled?: boolean;
};

export const PauseCircleIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: PauseCircleIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
