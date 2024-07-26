import { CloudArrowDownIcon as IconFilled } from "@heroicons/react/24/solid";
import { CloudArrowDownIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type CloudArrowDownIconProps = IconSvgProps & {
  filled?: boolean;
};

export const CloudArrowDownIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: CloudArrowDownIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
