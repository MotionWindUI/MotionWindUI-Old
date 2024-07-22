import { ChatBubbleOvalLeftIcon as IconFilled } from "@heroicons/react/24/solid";
import { ChatBubbleOvalLeftIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ChatBubbleOvalLeftIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ChatBubbleOvalLeftIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ChatBubbleOvalLeftIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
