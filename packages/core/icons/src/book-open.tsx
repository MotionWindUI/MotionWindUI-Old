import { BookOpenIcon as IconFilled } from "@heroicons/react/24/solid";
import { BookOpenIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type BookOpenIconProps = IconSvgProps & {
  filled?: boolean;
};

export const BookOpenIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: BookOpenIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
