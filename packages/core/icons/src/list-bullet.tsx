import { ListBulletIcon as IconFilled } from "@heroicons/react/24/solid";
import { ListBulletIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ListBulletIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ListBulletIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ListBulletIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
