import { ReceiptPercentIcon as IconFilled } from "@heroicons/react/24/solid";
import { ReceiptPercentIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ReceiptPercentIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ReceiptPercentIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ReceiptPercentIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
