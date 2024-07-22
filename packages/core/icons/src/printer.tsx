import { PrinterIcon as IconFilled } from "@heroicons/react/24/solid";
import { PrinterIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type PrinterIconProps = IconSvgProps & {
    filled?: boolean;
};

export const PrinterIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: PrinterIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
