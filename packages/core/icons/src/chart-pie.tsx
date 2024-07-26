import { ChartPieIcon as IconFilled } from "@heroicons/react/24/solid";
import { ChartPieIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ChartPieIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ChartPieIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ChartPieIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
