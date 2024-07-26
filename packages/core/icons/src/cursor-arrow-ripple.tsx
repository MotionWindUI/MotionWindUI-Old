import { CursorArrowRippleIcon as IconFilled } from "@heroicons/react/24/solid";
import { CursorArrowRippleIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type CursorArrowRippleIconProps = IconSvgProps & {
  filled?: boolean;
};

export const CursorArrowRippleIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: CursorArrowRippleIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
