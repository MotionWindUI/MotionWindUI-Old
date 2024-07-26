import { BeakerIcon as IconFilled } from "@heroicons/react/24/solid";
import { BeakerIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type BeakerIconProps = IconSvgProps & {
  filled?: boolean;
};

export const BeakerIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: BeakerIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
