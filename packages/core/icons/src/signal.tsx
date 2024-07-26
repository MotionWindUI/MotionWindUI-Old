import { SignalIcon as IconFilled } from "@heroicons/react/24/solid";
import { SignalIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type SignalIconProps = IconSvgProps & {
  filled?: boolean;
};

export const SignalIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: SignalIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
