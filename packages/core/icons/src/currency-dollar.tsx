import { CurrencyDollarIcon as IconFilled } from "@heroicons/react/24/solid";
import { CurrencyDollarIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type CurrencyDollarIconProps = IconSvgProps & {
  filled?: boolean;
};

export const CurrencyDollarIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: CurrencyDollarIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
