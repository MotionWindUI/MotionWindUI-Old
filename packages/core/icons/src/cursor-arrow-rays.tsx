import { CursorArrowRaysIcon as IconFilled } from "@heroicons/react/24/solid";
import { CursorArrowRaysIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type CursorArrowRaysIconProps = IconSvgProps & {
  filled?: boolean;
};

export const CursorArrowRaysIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: CursorArrowRaysIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
