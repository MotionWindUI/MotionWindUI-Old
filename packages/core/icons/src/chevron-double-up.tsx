import { ChevronDoubleUpIcon as IconFilled } from "@heroicons/react/24/solid";
import { ChevronDoubleUpIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ChevronDoubleUpIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ChevronDoubleUpIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ChevronDoubleUpIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
