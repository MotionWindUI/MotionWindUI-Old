import { ForwardIcon as IconFilled } from "@heroicons/react/24/solid";
import { ForwardIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ForwardIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ForwardIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ForwardIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
