import { Battery0Icon as IconFilled } from "@heroicons/react/24/solid";
import { Battery0Icon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type Battery0IconProps = IconSvgProps & {
  filled?: boolean;
};

export const Battery0Icon = ({
  filled = false,
  color = "currentColor",
  ...props
}: Battery0IconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
