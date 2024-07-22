import { SquaresPlusIcon as IconFilled } from "@heroicons/react/24/solid";
import { SquaresPlusIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type SquaresPlusIconProps = IconSvgProps & {
    filled?: boolean;
};

export const SquaresPlusIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: SquaresPlusIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
