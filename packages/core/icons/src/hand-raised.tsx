import { HandRaisedIcon as IconFilled } from "@heroicons/react/24/solid";
import { HandRaisedIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type HandRaisedIconProps = IconSvgProps & {
    filled?: boolean;
};

export const HandRaisedIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: HandRaisedIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
