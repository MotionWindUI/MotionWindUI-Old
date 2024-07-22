import { Cog8ToothIcon as IconFilled } from "@heroicons/react/24/solid";
import { Cog8ToothIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type Cog8ToothIconProps = IconSvgProps & {
    filled?: boolean;
};

export const Cog8ToothIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: Cog8ToothIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
