import { BarsArrowUpIcon as IconFilled } from "@heroicons/react/24/solid";
import { BarsArrowUpIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type BarsArrowUpIconProps = IconSvgProps & {
    filled?: boolean;
};

export const BarsArrowUpIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: BarsArrowUpIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
