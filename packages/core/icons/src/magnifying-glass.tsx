import { MagnifyingGlassIcon as IconFilled } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type MagnifyingGlassIconProps = IconSvgProps & {
    filled?: boolean;
};

export const MagnifyingGlassIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: MagnifyingGlassIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
