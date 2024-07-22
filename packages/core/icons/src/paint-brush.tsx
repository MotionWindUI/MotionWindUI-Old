import { PaintBrushIcon as IconFilled } from "@heroicons/react/24/solid";
import { PaintBrushIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type PaintBrushIconProps = IconSvgProps & {
    filled?: boolean;
};

export const PaintBrushIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: PaintBrushIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
