import { SunIcon as IconFilled } from "@heroicons/react/24/solid";
import { SunIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type SunIconProps = IconSvgProps & {
    filled?: boolean;
};

export const SunIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: SunIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
