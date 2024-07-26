import { ChevronDoubleDownIcon as IconFilled } from "@heroicons/react/24/solid";
import { ChevronDoubleDownIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ChevronDoubleDownIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ChevronDoubleDownIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ChevronDoubleDownIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
