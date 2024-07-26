import { ChevronUpDownIcon as IconFilled } from "@heroicons/react/24/solid";
import { ChevronUpDownIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ChevronUpDownIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ChevronUpDownIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ChevronUpDownIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
