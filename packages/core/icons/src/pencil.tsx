import { PencilIcon as IconFilled } from "@heroicons/react/24/solid";
import { PencilIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type PencilIconProps = IconSvgProps & {
    filled?: boolean;
};

export const PencilIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: PencilIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
