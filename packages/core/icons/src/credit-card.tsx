import { CreditCardIcon as IconFilled } from "@heroicons/react/24/solid";
import { CreditCardIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type CreditCardIconProps = IconSvgProps & {
  filled?: boolean;
};

export const CreditCardIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: CreditCardIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
