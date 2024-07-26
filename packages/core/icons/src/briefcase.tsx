import { BriefcaseIcon as IconFilled } from "@heroicons/react/24/solid";
import { BriefcaseIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type BriefcaseIconProps = IconSvgProps & {
  filled?: boolean;
};

export const BriefcaseIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: BriefcaseIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
