import { HandThumbUpIcon as IconFilled } from "@heroicons/react/24/solid";
import { HandThumbUpIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type HandThumbUpIconProps = IconSvgProps & {
  filled?: boolean;
};

export const HandThumbUpIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: HandThumbUpIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
