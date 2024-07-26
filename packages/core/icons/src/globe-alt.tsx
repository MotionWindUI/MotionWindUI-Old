import { GlobeAltIcon as IconFilled } from "@heroicons/react/24/solid";
import { GlobeAltIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type GlobeAltIconProps = IconSvgProps & {
  filled?: boolean;
};

export const GlobeAltIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: GlobeAltIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
