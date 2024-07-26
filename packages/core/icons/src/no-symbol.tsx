import { NoSymbolIcon as IconFilled } from "@heroicons/react/24/solid";
import { NoSymbolIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type NoSymbolIconProps = IconSvgProps & {
  filled?: boolean;
};

export const NoSymbolIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: NoSymbolIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
