import { BackspaceIcon as IconFilled } from "@heroicons/react/24/solid";
import { BackspaceIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type BackspaceIconProps = IconSvgProps & {
  filled?: boolean;
};

export const BackspaceIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: BackspaceIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
