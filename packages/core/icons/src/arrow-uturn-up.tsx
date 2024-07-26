import { ArrowUturnUpIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowUturnUpIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowUturnUpIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ArrowUturnUpIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ArrowUturnUpIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
