import { WrenchScrewdriverIcon as IconFilled } from "@heroicons/react/24/solid";
import { WrenchScrewdriverIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type WrenchScrewdriverIconProps = IconSvgProps & {
  filled?: boolean;
};

export const WrenchScrewdriverIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: WrenchScrewdriverIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
