import { DocumentArrowDownIcon as IconFilled } from "@heroicons/react/24/solid";
import { DocumentArrowDownIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type DocumentArrowDownIconProps = IconSvgProps & {
  filled?: boolean;
};

export const DocumentArrowDownIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: DocumentArrowDownIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
