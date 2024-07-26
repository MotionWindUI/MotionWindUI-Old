import { ArrowDownOnSquareStackIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowDownOnSquareStackIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowDownOnSquareStackIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ArrowDownOnSquareStackIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ArrowDownOnSquareStackIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
