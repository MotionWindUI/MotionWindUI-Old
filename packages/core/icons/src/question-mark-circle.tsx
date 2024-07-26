import { QuestionMarkCircleIcon as IconFilled } from "@heroicons/react/24/solid";
import { QuestionMarkCircleIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type QuestionMarkCircleIconProps = IconSvgProps & {
  filled?: boolean;
};

export const QuestionMarkCircleIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: QuestionMarkCircleIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
