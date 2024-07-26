import { ChevronUpIcon as IconFilled } from "@heroicons/react/24/solid";
import { ChevronUpIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ChevronUpIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ChevronUpIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ChevronUpIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
