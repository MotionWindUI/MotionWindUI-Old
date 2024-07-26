import { WalletIcon as IconFilled } from "@heroicons/react/24/solid";
import { WalletIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type WalletIconProps = IconSvgProps & {
  filled?: boolean;
};

export const WalletIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: WalletIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
