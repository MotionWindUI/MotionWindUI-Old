import { EllipsisHorizontalIcon as IconFilled } from "@heroicons/react/24/solid";
import { EllipsisHorizontalIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type EllipsisHorizontalIconProps = IconSvgProps & {
  filled?: boolean;
};

export const EllipsisHorizontalIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: EllipsisHorizontalIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
