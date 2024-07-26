import { TruckIcon as IconFilled } from "@heroicons/react/24/solid";
import { TruckIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type TruckIconProps = IconSvgProps & {
  filled?: boolean;
};

export const TruckIcon = ({ filled = false, color = "currentColor", ...props }: TruckIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
