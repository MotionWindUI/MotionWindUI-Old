import { BuildingOffice2Icon as IconFilled } from "@heroicons/react/24/solid";
import { BuildingOffice2Icon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type BuildingOffice2IconProps = IconSvgProps & {
  filled?: boolean;
};

export const BuildingOffice2Icon = ({
  filled = false,
  color = "currentColor",
  ...props
}: BuildingOffice2IconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
