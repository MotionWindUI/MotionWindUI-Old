import { ChatBubbleBottomCenterIcon as IconFilled } from "@heroicons/react/24/solid";
import { ChatBubbleBottomCenterIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ChatBubbleBottomCenterIconProps = IconSvgProps & {
  filled?: boolean;
};

export const ChatBubbleBottomCenterIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: ChatBubbleBottomCenterIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
