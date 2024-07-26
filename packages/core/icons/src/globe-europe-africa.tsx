import { GlobeEuropeAfricaIcon as IconFilled } from "@heroicons/react/24/solid";
import { GlobeEuropeAfricaIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type GlobeEuropeAfricaIconProps = IconSvgProps & {
  filled?: boolean;
};

export const GlobeEuropeAfricaIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: GlobeEuropeAfricaIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
