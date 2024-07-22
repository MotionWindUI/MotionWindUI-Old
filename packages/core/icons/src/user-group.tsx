import { UserGroupIcon as IconFilled } from "@heroicons/react/24/solid";
import { UserGroupIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type UserGroupIconProps = IconSvgProps & {
    filled?: boolean;
};

export const UserGroupIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: UserGroupIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
