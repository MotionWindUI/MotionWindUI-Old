import { WifiIcon as IconFilled } from "@heroicons/react/24/solid";
import { WifiIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type WifiIconProps = IconSvgProps & {
    filled?: boolean;
};

export const WifiIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: WifiIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
