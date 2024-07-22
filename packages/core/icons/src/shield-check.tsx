import { ShieldCheckIcon as IconFilled } from "@heroicons/react/24/solid";
import { ShieldCheckIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ShieldCheckIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ShieldCheckIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ShieldCheckIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
