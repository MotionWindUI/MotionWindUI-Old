import { MoonIcon as IconFilled } from "@heroicons/react/24/solid";
import { MoonIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type MoonIconProps = IconSvgProps & {
    filled?: boolean;
};

export const MoonIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: MoonIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
