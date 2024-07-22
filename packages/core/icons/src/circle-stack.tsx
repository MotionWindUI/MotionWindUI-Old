import { CircleStackIcon as IconFilled } from "@heroicons/react/24/solid";
import { CircleStackIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type CircleStackIconProps = IconSvgProps & {
    filled?: boolean;
};

export const CircleStackIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: CircleStackIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
