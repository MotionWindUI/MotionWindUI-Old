import { CommandLineIcon as IconFilled } from "@heroicons/react/24/solid";
import { CommandLineIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type CommandLineIconProps = IconSvgProps & {
  filled?: boolean;
};

export const CommandLineIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: CommandLineIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
