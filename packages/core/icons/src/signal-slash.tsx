import { SignalSlashIcon as IconFilled } from "@heroicons/react/24/solid";
import { SignalSlashIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type SignalSlashIconProps = IconSvgProps & {
    filled?: boolean;
};

export const SignalSlashIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: SignalSlashIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
