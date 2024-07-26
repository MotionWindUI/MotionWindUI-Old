import { BuildingLibraryIcon as IconFilled } from "@heroicons/react/24/solid";
import { BuildingLibraryIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type BuildingLibraryIconProps = IconSvgProps & {
  filled?: boolean;
};

export const BuildingLibraryIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: BuildingLibraryIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
