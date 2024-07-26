import { ArchiveBoxArrowDownIcon as IconFilled } from "@heroicons/react/24/solid";
import { ArchiveBoxArrowDownIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ArchiveBoxArrowDownIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ArchiveBoxArrowDownIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ArchiveBoxArrowDownIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
