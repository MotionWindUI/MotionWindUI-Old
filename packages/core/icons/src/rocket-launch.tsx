import { RocketLaunchIcon as IconFilled } from "@heroicons/react/24/solid";
import { RocketLaunchIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type RocketLaunchIconProps = IconSvgProps & {
  filled?: boolean;
};

export const RocketLaunchIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: RocketLaunchIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
