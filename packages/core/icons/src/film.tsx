import { FilmIcon as IconFilled } from "@heroicons/react/24/solid";
import { FilmIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type FilmIconProps = IconSvgProps & {
  filled?: boolean;
};

export const FilmIcon = ({ filled = false, color = "currentColor", ...props }: FilmIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
