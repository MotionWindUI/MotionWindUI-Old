import { FunnelIcon as IconFilled } from "@heroicons/react/24/solid";
import { FunnelIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type FunnelIconProps = IconSvgProps & {
  filled?: boolean;
};

export const FunnelIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: FunnelIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
