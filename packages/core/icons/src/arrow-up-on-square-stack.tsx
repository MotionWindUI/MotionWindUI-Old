import { ArrowUpOnSquareStackIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowUpOnSquareStackIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowUpOnSquareStackIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ArrowUpOnSquareStackIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ArrowUpOnSquareStackIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
