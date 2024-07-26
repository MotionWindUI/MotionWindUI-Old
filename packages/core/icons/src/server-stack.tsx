import { ServerStackIcon as IconFilled } from "@heroicons/react/24/solid";
import { ServerStackIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ServerStackIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ServerStackIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ServerStackIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
