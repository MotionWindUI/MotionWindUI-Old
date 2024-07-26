import { GlobeAmericasIcon as IconFilled } from "@heroicons/react/24/solid";
import { GlobeAmericasIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type GlobeAmericasIconProps = IconSvgProps & {
  filled?: boolean;
};

export const GlobeAmericasIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: GlobeAmericasIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
