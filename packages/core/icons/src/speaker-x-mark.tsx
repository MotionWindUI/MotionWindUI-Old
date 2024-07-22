import { SpeakerXMarkIcon as IconFilled } from "@heroicons/react/24/solid";
import { SpeakerXMarkIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type SpeakerXMarkIconProps = IconSvgProps & {
    filled?: boolean;
};

export const SpeakerXMarkIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: SpeakerXMarkIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
