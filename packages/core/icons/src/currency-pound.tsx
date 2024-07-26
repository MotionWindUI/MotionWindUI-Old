import { CurrencyPoundIcon as IconFilled } from "@heroicons/react/24/solid";
import { CurrencyPoundIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type CurrencyPoundIconProps = IconSvgProps & {
  filled?: boolean;
};

export const CurrencyPoundIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: CurrencyPoundIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
