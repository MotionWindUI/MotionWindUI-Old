import { ChatBubbleBottomCenterTextIcon as IconFilled } from "@heroicons/react/24/solid";
import { ChatBubbleBottomCenterTextIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ChatBubbleBottomCenterTextIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ChatBubbleBottomCenterTextIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ChatBubbleBottomCenterTextIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
