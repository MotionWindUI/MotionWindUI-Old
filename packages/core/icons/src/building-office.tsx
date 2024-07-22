import { BuildingOfficeIcon as IconFilled } from "@heroicons/react/24/solid";
import { BuildingOfficeIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type BuildingOfficeIconProps = IconSvgProps & {
    filled?: boolean;
};

export const BuildingOfficeIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: BuildingOfficeIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
