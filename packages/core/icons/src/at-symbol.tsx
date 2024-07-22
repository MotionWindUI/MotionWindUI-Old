import { AtSymbolIcon as IconFilled } from "@heroicons/react/24/solid";
import { AtSymbolIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type AtSymbolIconProps = IconSvgProps & {
    filled?: boolean;
};

export const AtSymbolIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: AtSymbolIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
