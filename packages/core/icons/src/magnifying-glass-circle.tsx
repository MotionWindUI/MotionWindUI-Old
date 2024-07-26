import { MagnifyingGlassCircleIcon as IconFilled } from "@heroicons/react/24/solid";
import { MagnifyingGlassCircleIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type MagnifyingGlassCircleIconProps = IconSvgProps & {
  filled?: boolean;
};

export const MagnifyingGlassCircleIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: MagnifyingGlassCircleIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
