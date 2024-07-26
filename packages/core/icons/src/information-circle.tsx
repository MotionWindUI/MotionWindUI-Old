import { InformationCircleIcon as IconFilled } from "@heroicons/react/24/solid";
import { InformationCircleIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type InformationCircleIconProps = IconSvgProps & {
  filled?: boolean;
};

export const InformationCircleIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: InformationCircleIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
