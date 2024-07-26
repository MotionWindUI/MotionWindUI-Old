import { MinusCircleIcon as IconFilled } from "@heroicons/react/24/solid";
import { MinusCircleIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type MinusCircleIconProps = IconSvgProps & {
  filled?: boolean;
};

export const MinusCircleIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: MinusCircleIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
