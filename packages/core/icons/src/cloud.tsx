import { CloudIcon as IconFilled } from "@heroicons/react/24/solid";
import { CloudIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type CloudIconProps = IconSvgProps & {
  filled?: boolean;
};

export const CloudIcon = ({ filled = false, color = "currentColor", ...props }: CloudIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
