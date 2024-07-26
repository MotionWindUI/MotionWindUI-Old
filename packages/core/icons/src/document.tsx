import { DocumentIcon as IconFilled } from "@heroicons/react/24/solid";
import { DocumentIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type DocumentIconProps = IconSvgProps & {
  filled?: boolean;
};

export const DocumentIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: DocumentIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
