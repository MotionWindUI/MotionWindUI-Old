import { ArrowTopRightOnSquareIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArrowTopRightOnSquareIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArrowTopRightOnSquareIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ArrowTopRightOnSquareIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ArrowTopRightOnSquareIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
