import { FaceSmileIcon as IconFilled } from "@heroicons/react/24/solid";
import { FaceSmileIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type FaceSmileIconProps = IconSvgProps & {
  filled?: boolean;
};

export const FaceSmileIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: FaceSmileIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
