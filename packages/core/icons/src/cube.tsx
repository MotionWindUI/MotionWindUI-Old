import { CubeIcon as IconFilled } from "@heroicons/react/24/solid";
import { CubeIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type CubeIconProps = IconSvgProps & {
    filled?: boolean;
};

export const CubeIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: CubeIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
