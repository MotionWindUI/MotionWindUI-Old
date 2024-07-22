import { InboxIcon as IconFilled } from "@heroicons/react/24/solid";
import { InboxIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type InboxIconProps = IconSvgProps & {
    filled?: boolean;
};

export const InboxIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: InboxIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
