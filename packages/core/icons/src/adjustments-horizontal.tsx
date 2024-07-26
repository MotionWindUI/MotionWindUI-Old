import { AdjustmentsHorizontalIcon as IconFilled } from "@heroicons/react/24/solid";
import { AdjustmentsHorizontalIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type AdjustmentsHorizontalIconProps = IconSvgProps & {
  filled?: boolean;
};

export const AdjustmentsHorizontalIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: AdjustmentsHorizontalIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
