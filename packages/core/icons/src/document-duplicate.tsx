import { DocumentDuplicateIcon as IconFilled } from "@heroicons/react/24/solid";
import { DocumentDuplicateIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type DocumentDuplicateIconProps = IconSvgProps & {
  filled?: boolean;
};

export const DocumentDuplicateIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: DocumentDuplicateIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
