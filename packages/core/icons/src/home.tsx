import { HomeIcon as IconFilled } from "@heroicons/react/24/solid";
import { HomeIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type HomeIconProps = IconSvgProps & {
    filled?: boolean;
};

export const HomeIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: HomeIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
