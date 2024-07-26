import { ChevronLeftIcon as IconFilled } from "@heroicons/react/24/solid";
import { ChevronLeftIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ChevronLeftIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ChevronLeftIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ChevronLeftIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
