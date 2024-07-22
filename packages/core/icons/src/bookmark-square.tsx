import { BookmarkSquareIcon as IconFilled } from "@heroicons/react/24/solid";
import { BookmarkSquareIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type BookmarkSquareIconProps = IconSvgProps & {
    filled?: boolean;
};

export const BookmarkSquareIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: BookmarkSquareIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
