import { ScissorsIcon as IconFilled } from "@heroicons/react/24/solid";
import { ScissorsIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ScissorsIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ScissorsIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ScissorsIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
