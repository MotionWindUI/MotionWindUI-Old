import { HomeModernIcon as IconFilled } from "@heroicons/react/24/solid";
import { HomeModernIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type HomeModernIconProps = IconSvgProps & {
    filled?: boolean;
};

export const HomeModernIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: HomeModernIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
