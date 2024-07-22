import { Square2StackIcon as IconFilled } from "@heroicons/react/24/solid";
import { Square2StackIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type Square2StackIconProps = IconSvgProps & {
    filled?: boolean;
};

export const Square2StackIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: Square2StackIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
