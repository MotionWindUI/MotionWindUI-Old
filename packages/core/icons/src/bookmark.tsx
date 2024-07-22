import { BookmarkIcon as IconFilled } from "@heroicons/react/24/solid";
import { BookmarkIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type BookmarkIconProps = IconSvgProps & {
    filled?: boolean;
};

export const BookmarkIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: BookmarkIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
