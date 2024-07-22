import { DevicePhoneMobileIcon as IconFilled } from "@heroicons/react/24/solid";
import { DevicePhoneMobileIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type DevicePhoneMobileIconProps = IconSvgProps & {
    filled?: boolean;
};

export const DevicePhoneMobileIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: DevicePhoneMobileIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
