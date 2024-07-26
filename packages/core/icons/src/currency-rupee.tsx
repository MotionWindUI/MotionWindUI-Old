import { CurrencyRupeeIcon as IconFilled } from "@heroicons/react/24/solid";
import { CurrencyRupeeIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type CurrencyRupeeIconProps = IconSvgProps & {
  filled?: boolean;
};

export const CurrencyRupeeIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: CurrencyRupeeIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
