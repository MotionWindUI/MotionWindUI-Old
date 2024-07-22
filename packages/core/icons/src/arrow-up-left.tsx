import { ArrowUpLeftIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowUpLeftIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowUpLeftIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ArrowUpLeftIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ArrowUpLeftIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
