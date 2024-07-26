import { HashtagIcon as IconFilled } from "@heroicons/react/24/solid";
import { HashtagIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type HashtagIconProps = IconSvgProps & {
  filled?: boolean;
};

export const HashtagIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: HashtagIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
