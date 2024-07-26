import { ChevronDoubleLeftIcon as IconFilled } from "@heroicons/react/24/solid";
import { ChevronDoubleLeftIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ChevronDoubleLeftIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ChevronDoubleLeftIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ChevronDoubleLeftIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
