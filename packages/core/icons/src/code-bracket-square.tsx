import { CodeBracketSquareIcon as IconFilled } from "@heroicons/react/24/solid";
import { CodeBracketSquareIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type CodeBracketSquareIconProps = IconSvgProps & {
  filled?: boolean;
};

export const CodeBracketSquareIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: CodeBracketSquareIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
