import { CubeTransparentIcon as IconFilled } from "@heroicons/react/24/solid";
import { CubeTransparentIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type CubeTransparentIconProps = IconSvgProps & {
  filled?: boolean;
};

export const CubeTransparentIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: CubeTransparentIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
