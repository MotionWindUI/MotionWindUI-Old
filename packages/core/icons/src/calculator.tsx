import { CalculatorIcon as IconFilled } from "@heroicons/react/24/solid";
import { CalculatorIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type CalculatorIconProps = IconSvgProps & {
  filled?: boolean;
};

export const CalculatorIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: CalculatorIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
