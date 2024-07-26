import { PencilSquareIcon as IconFilled } from "@heroicons/react/24/solid";
import { PencilSquareIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type PencilSquareIconProps = IconSvgProps & {
  filled?: boolean;
};

export const PencilSquareIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: PencilSquareIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
