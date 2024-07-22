import { InboxStackIcon as IconFilled } from "@heroicons/react/24/solid";
import { InboxStackIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type InboxStackIconProps = IconSvgProps & {
    filled?: boolean;
};

export const InboxStackIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: InboxStackIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
