import { ArrowUturnRightIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowUturnRightIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowUturnRightIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ArrowUturnRightIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ArrowUturnRightIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
