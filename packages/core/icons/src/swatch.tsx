import { SwatchIcon as IconFilled } from "@heroicons/react/24/solid";
import { SwatchIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type SwatchIconProps = IconSvgProps & {
  filled?: boolean;
};

export const SwatchIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: SwatchIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
