import { ArrowDownLeftIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowDownLeftIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowDownLeftIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ArrowDownLeftIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ArrowDownLeftIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
