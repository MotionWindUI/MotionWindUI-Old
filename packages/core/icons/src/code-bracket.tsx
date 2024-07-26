import { CodeBracketIcon as IconFilled } from "@heroicons/react/24/solid";
import { CodeBracketIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type CodeBracketIconProps = IconSvgProps & {
  filled?: boolean;
};

export const CodeBracketIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: CodeBracketIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
