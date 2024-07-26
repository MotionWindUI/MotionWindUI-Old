import { Bars3BottomLeftIcon as IconFilled } from "@heroicons/react/24/solid";
import { Bars3BottomLeftIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type Bars3BottomLeftIconProps = IconSvgProps & {
  filled?: boolean;
};

export const Bars3BottomLeftIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: Bars3BottomLeftIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
