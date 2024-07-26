import { TrophyIcon as IconFilled } from "@heroicons/react/24/solid";
import { TrophyIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type TrophyIconProps = IconSvgProps & {
  filled?: boolean;
};

export const TrophyIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: TrophyIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
