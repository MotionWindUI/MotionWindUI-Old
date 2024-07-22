import { PaperClipIcon as IconFilled } from "@heroicons/react/24/solid";
import { PaperClipIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type PaperClipIconProps = IconSvgProps & {
    filled?: boolean;
};

export const PaperClipIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: PaperClipIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
