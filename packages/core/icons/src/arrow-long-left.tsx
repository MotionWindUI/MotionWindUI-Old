import { ArrowLongLeftIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowLongLeftIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowLongLeftIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ArrowLongLeftIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ArrowLongLeftIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
