import { Battery100Icon as IconFilled } from "@heroicons/react/24/solid";
import { Battery100Icon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type Battery100IconProps = IconSvgProps & {
  filled?: boolean;
};

export const Battery100Icon = ({
  filled = false,
  color = "currentColor",
  ...props
}: Battery100IconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
