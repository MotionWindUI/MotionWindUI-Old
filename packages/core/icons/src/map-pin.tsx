import { MapPinIcon as IconFilled } from "@heroicons/react/24/solid";
import { MapPinIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type MapPinIconProps = IconSvgProps & {
  filled?: boolean;
};

export const MapPinIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: MapPinIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
