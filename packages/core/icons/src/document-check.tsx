import { DocumentCheckIcon as IconFilled } from "@heroicons/react/24/solid";
import { DocumentCheckIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type DocumentCheckIconProps = IconSvgProps & {
  filled?: boolean;
};

export const DocumentCheckIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: DocumentCheckIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
