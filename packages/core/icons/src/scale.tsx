import { ScaleIcon as IconFilled } from "@heroicons/react/24/solid";
import { ScaleIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ScaleIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ScaleIcon = ({ filled = false, color = "currentColor", ...props }: ScaleIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
