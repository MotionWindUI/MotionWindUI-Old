import { PlusIcon as IconFilled } from "@heroicons/react/24/solid";
import { PlusIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type PlusIconProps = IconSvgProps & {
    filled?: boolean;
};

export const PlusIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: PlusIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
