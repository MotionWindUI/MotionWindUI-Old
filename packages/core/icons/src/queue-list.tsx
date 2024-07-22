import { QueueListIcon as IconFilled } from "@heroicons/react/24/solid";
import { QueueListIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type QueueListIconProps = IconSvgProps & {
    filled?: boolean;
};

export const QueueListIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: QueueListIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
