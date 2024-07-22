import { ChatBubbleLeftIcon as IconFilled } from "@heroicons/react/24/solid";
import { ChatBubbleLeftIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ChatBubbleLeftIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ChatBubbleLeftIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ChatBubbleLeftIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
