import { MagnifyingGlassPlusIcon as IconFilled } from "@heroicons/react/24/solid";
import { MagnifyingGlassPlusIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type MagnifyingGlassPlusIconProps = IconSvgProps & {
    filled?: boolean;
};

export const MagnifyingGlassPlusIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: MagnifyingGlassPlusIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
