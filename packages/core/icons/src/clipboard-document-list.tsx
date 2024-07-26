import { ClipboardDocumentListIcon as IconFilled } from "@heroicons/react/24/solid";
import { ClipboardDocumentListIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ClipboardDocumentListIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ClipboardDocumentListIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ClipboardDocumentListIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
