import { ChatBubbleLeftRightIcon as IconFilled } from "@heroicons/react/24/solid";
import { ChatBubbleLeftRightIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ChatBubbleLeftRightIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ChatBubbleLeftRightIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ChatBubbleLeftRightIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
