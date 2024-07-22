import { IdentificationIcon as IconFilled } from "@heroicons/react/24/solid";
import { IdentificationIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type IdentificationIconProps = IconSvgProps & {
    filled?: boolean;
};

export const IdentificationIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: IdentificationIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
