import { RssIcon as IconFilled } from "@heroicons/react/24/solid";
import { RssIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type RssIconProps = IconSvgProps & {
  filled?: boolean;
};

export const RssIcon = ({ filled = false, color = "currentColor", ...props }: RssIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
