import { VideoCameraIcon as IconFilled } from "@heroicons/react/24/solid";
import { VideoCameraIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type VideoCameraIconProps = IconSvgProps & {
    filled?: boolean;
};

export const VideoCameraIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: VideoCameraIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
