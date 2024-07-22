import { QrCodeIcon as IconFilled } from "@heroicons/react/24/solid";
import { QrCodeIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type QrCodeIconProps = IconSvgProps & {
    filled?: boolean;
};

export const QrCodeIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: QrCodeIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
