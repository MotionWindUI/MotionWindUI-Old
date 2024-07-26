import { ChevronDoubleRightIcon as IconFilled } from "@heroicons/react/24/solid";
import { ChevronDoubleRightIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ChevronDoubleRightIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ChevronDoubleRightIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ChevronDoubleRightIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
