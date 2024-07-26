import { ArrowDownRightIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowDownRightIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowDownRightIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ArrowDownRightIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ArrowDownRightIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
