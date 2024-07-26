import { LifebuoyIcon as IconFilled } from "@heroicons/react/24/solid";
import { LifebuoyIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type LifebuoyIconProps = IconSvgProps & {
  filled?: boolean;
};

export const LifebuoyIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: LifebuoyIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
