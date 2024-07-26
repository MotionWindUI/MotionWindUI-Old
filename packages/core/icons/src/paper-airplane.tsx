import { PaperAirplaneIcon as IconFilled } from "@heroicons/react/24/solid";
import { PaperAirplaneIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type PaperAirplaneIconProps = IconSvgProps & {
  filled?: boolean;
};

export const PaperAirplaneIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: PaperAirplaneIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
