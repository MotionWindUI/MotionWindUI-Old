import { BoltSlashIcon as IconFilled } from "@heroicons/react/24/solid";
import { BoltSlashIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type BoltSlashIconProps = IconSvgProps & {
    filled?: boolean;
};

export const BoltSlashIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: BoltSlashIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
