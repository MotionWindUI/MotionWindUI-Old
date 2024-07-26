import { ViewColumnsIcon as IconFilled } from "@heroicons/react/24/solid";
import { ViewColumnsIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ViewColumnsIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ViewColumnsIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ViewColumnsIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
