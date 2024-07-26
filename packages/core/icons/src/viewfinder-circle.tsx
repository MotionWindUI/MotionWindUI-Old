import { ViewfinderCircleIcon as IconFilled } from "@heroicons/react/24/solid";
import { ViewfinderCircleIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ViewfinderCircleIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ViewfinderCircleIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ViewfinderCircleIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
