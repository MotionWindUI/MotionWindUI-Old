import { ShareIcon as IconFilled } from "@heroicons/react/24/solid";
import { ShareIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ShareIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ShareIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ShareIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
