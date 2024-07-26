import { BanknotesIcon as IconFilled } from "@heroicons/react/24/solid";
import { BanknotesIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type BanknotesIconProps = IconSvgProps & {
  filled?: boolean;
};

export const BanknotesIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: BanknotesIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
