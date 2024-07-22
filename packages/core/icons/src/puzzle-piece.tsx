import { PuzzlePieceIcon as IconFilled } from "@heroicons/react/24/solid";
import { PuzzlePieceIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type PuzzlePieceIconProps = IconSvgProps & {
    filled?: boolean;
};

export const PuzzlePieceIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: PuzzlePieceIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
