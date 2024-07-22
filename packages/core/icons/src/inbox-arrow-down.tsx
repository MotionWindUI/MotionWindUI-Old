import { InboxArrowDownIcon as IconFilled } from "@heroicons/react/24/solid";
import { InboxArrowDownIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type InboxArrowDownIconProps = IconSvgProps & {
    filled?: boolean;
};

export const InboxArrowDownIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: InboxArrowDownIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
