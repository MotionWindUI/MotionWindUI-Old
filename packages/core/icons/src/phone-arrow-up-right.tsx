import { PhoneArrowUpRightIcon as IconFilled } from "@heroicons/react/24/solid";
import { PhoneArrowUpRightIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type PhoneArrowUpRightIconProps = IconSvgProps & {
  filled?: boolean;
};

export const PhoneArrowUpRightIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: PhoneArrowUpRightIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
