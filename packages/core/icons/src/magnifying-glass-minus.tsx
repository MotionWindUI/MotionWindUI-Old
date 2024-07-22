import { MagnifyingGlassMinusIcon as IconFilled } from "@heroicons/react/24/solid";
import { MagnifyingGlassMinusIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type MagnifyingGlassMinusIconProps = IconSvgProps & {
    filled?: boolean;
};

export const MagnifyingGlassMinusIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: MagnifyingGlassMinusIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
