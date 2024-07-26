import { CurrencyBangladeshiIcon as IconFilled } from "@heroicons/react/24/solid";
import { CurrencyBangladeshiIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type CurrencyBangladeshiIconProps = IconSvgProps & {
  filled?: boolean;
};

export const CurrencyBangladeshiIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: CurrencyBangladeshiIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
