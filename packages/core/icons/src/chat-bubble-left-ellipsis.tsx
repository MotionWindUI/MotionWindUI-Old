import { ChatBubbleLeftEllipsisIcon as IconFilled } from "@heroicons/react/24/solid";
import { ChatBubbleLeftEllipsisIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ChatBubbleLeftEllipsisIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ChatBubbleLeftEllipsisIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ChatBubbleLeftEllipsisIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
