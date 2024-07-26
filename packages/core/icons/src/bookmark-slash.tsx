import { BookmarkSlashIcon as IconFilled } from "@heroicons/react/24/solid";
import { BookmarkSlashIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type BookmarkSlashIconProps = IconSvgProps & {
  filled?: boolean;
};

export const BookmarkSlashIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: BookmarkSlashIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
