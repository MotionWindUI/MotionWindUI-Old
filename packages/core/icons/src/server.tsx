import { ServerIcon as IconFilled } from "@heroicons/react/24/solid";
import { ServerIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ServerIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ServerIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ServerIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
