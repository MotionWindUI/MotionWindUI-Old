import { Cog6ToothIcon as IconFilled } from "@heroicons/react/24/solid";
import { Cog6ToothIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type Cog6ToothIconProps = IconSvgProps & {
    filled?: boolean;
};

export const Cog6ToothIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: Cog6ToothIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
