import { CogIcon as IconFilled } from "@heroicons/react/24/solid";
import { CogIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type CogIconProps = IconSvgProps & {
    filled?: boolean;
};

export const CogIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: CogIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
