import { ExclamationTriangleIcon as IconFilled } from "@heroicons/react/24/solid";
import { ExclamationTriangleIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ExclamationTriangleIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ExclamationTriangleIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ExclamationTriangleIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
