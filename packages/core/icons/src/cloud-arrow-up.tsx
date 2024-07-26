import { CloudArrowUpIcon as IconFilled } from "@heroicons/react/24/solid";
import { CloudArrowUpIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type CloudArrowUpIconProps = IconSvgProps & {
  filled?: boolean;
};

export const CloudArrowUpIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: CloudArrowUpIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
