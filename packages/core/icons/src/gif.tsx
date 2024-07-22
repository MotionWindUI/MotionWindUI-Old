import { GifIcon as IconFilled } from "@heroicons/react/24/solid";
import { GifIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type GifIconProps = IconSvgProps & {
    filled?: boolean;
};

export const GifIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: GifIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
