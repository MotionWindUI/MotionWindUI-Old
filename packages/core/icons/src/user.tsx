import { UserIcon as IconFilled } from "@heroicons/react/24/solid";
import { UserIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type UserIconProps = IconSvgProps & {
    filled?: boolean;
};

export const UserIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: UserIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
