import { Battery50Icon as IconFilled } from "@heroicons/react/24/solid";
import { Battery50Icon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type Battery50IconProps = IconSvgProps & {
  filled?: boolean;
};

export const Battery50Icon = ({
  filled = false,
  color = "currentColor",
  ...props
}: Battery50IconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
