import { PlayCircleIcon as IconFilled } from "@heroicons/react/24/solid";
import { PlayCircleIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type PlayCircleIconProps = IconSvgProps & {
  filled?: boolean;
};

export const PlayCircleIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: PlayCircleIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
