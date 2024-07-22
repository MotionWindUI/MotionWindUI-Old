import { BarsArrowDownIcon as IconFilled } from "@heroicons/react/24/solid";
import { BarsArrowDownIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type BarsArrowDownIconProps = IconSvgProps & {
    filled?: boolean;
};

export const BarsArrowDownIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: BarsArrowDownIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
