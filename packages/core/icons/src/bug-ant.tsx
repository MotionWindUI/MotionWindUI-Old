import { BugAntIcon as IconFilled } from "@heroicons/react/24/solid";
import { BugAntIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type BugAntIconProps = IconSvgProps & {
  filled?: boolean;
};

export const BugAntIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: BugAntIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
