import { ChatBubbleOvalLeftEllipsisIcon as IconFilled } from "@heroicons/react/24/solid";
import { ChatBubbleOvalLeftEllipsisIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ChatBubbleOvalLeftEllipsisIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ChatBubbleOvalLeftEllipsisIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ChatBubbleOvalLeftEllipsisIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
