import { DocumentChartBarIcon as IconFilled } from "@heroicons/react/24/solid";
import { DocumentChartBarIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type DocumentChartBarIconProps = IconSvgProps & {
  filled?: boolean;
};

export const DocumentChartBarIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: DocumentChartBarIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
