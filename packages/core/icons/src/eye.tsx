import { EyeIcon as IconFilled } from "@heroicons/react/24/solid";
import { EyeIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type EyeIconProps = IconSvgProps & {
    filled?: boolean;
};

export const EyeIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: EyeIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
