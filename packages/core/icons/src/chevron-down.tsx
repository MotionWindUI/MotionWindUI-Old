import { ChevronDownIcon as IconFilled } from "@heroicons/react/24/solid";
import { ChevronDownIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ChevronDownIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ChevronDownIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ChevronDownIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
