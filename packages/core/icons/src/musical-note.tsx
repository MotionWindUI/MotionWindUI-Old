import { MusicalNoteIcon as IconFilled } from "@heroicons/react/24/solid";
import { MusicalNoteIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type MusicalNoteIconProps = IconSvgProps & {
  filled?: boolean;
};

export const MusicalNoteIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: MusicalNoteIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
