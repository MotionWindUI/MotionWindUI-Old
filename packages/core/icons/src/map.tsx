import { MapIcon as IconFilled } from "@heroicons/react/24/solid";
import { MapIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type MapIconProps = IconSvgProps & {
  filled?: boolean;
};

export const MapIcon = ({ filled = false, color = "currentColor", ...props }: MapIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
