import { EyeSlashIcon as IconFilled } from "@heroicons/react/24/solid";
import { EyeSlashIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type EyeSlashIconProps = IconSvgProps & {
    filled?: boolean;
};

export const EyeSlashIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: EyeSlashIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
