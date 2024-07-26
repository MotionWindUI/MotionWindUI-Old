import { NewspaperIcon as IconFilled } from "@heroicons/react/24/solid";
import { NewspaperIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type NewspaperIconProps = IconSvgProps & {
  filled?: boolean;
};

export const NewspaperIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: NewspaperIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
