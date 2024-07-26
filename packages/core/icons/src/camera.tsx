import { CameraIcon as IconFilled } from "@heroicons/react/24/solid";
import { CameraIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type CameraIconProps = IconSvgProps & {
  filled?: boolean;
};

export const CameraIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: CameraIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
