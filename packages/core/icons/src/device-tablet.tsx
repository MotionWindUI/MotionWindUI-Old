import { DeviceTabletIcon as IconFilled } from "@heroicons/react/24/solid";
import { DeviceTabletIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type DeviceTabletIconProps = IconSvgProps & {
  filled?: boolean;
};

export const DeviceTabletIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: DeviceTabletIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
