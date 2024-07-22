import { BuildingStorefrontIcon as IconFilled } from "@heroicons/react/24/solid";
import { BuildingStorefrontIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type BuildingStorefrontIconProps = IconSvgProps & {
    filled?: boolean;
};

export const BuildingStorefrontIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: BuildingStorefrontIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
