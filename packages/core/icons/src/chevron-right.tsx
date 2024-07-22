import { ChevronRightIcon as IconFilled } from "@heroicons/react/24/solid";
import { ChevronRightIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ChevronRightIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ChevronRightIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ChevronRightIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
