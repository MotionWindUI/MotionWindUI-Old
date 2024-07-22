import { EllipsisVerticalIcon as IconFilled } from "@heroicons/react/24/solid";
import { EllipsisVerticalIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type EllipsisVerticalIconProps = IconSvgProps & {
    filled?: boolean;
};

export const EllipsisVerticalIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: EllipsisVerticalIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
