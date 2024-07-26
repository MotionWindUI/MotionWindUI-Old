import { Bars3BottomRightIcon as IconFilled } from "@heroicons/react/24/solid";
import { Bars3BottomRightIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type Bars3BottomRightIconProps = IconSvgProps & {
  filled?: boolean;
};

export const Bars3BottomRightIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: Bars3BottomRightIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
