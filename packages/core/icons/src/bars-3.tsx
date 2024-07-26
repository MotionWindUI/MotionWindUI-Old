import { Bars3Icon as IconFilled } from "@heroicons/react/24/solid";
import { Bars3Icon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type Bars3IconProps = IconSvgProps & {
  filled?: boolean;
};

export const Bars3Icon = ({ filled = false, color = "currentColor", ...props }: Bars3IconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
