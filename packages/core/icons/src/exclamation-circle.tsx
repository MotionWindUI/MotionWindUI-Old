import { ExclamationCircleIcon as IconFilled } from "@heroicons/react/24/solid";
import { ExclamationCircleIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ExclamationCircleIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ExclamationCircleIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ExclamationCircleIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
