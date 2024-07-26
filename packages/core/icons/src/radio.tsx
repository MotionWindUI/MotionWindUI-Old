import { RadioIcon as IconFilled } from "@heroicons/react/24/solid";
import { RadioIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type RadioIconProps = IconSvgProps & {
  filled?: boolean;
};

export const RadioIcon = ({ filled = false, color = "currentColor", ...props }: RadioIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
