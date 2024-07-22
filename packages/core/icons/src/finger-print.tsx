import { FingerPrintIcon as IconFilled } from "@heroicons/react/24/solid";
import { FingerPrintIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type FingerPrintIconProps = IconSvgProps & {
    filled?: boolean;
};

export const FingerPrintIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: FingerPrintIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
