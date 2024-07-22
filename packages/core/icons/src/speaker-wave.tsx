import { SpeakerWaveIcon as IconFilled } from "@heroicons/react/24/solid";
import { SpeakerWaveIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type SpeakerWaveIconProps = IconSvgProps & {
    filled?: boolean;
};

export const SpeakerWaveIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: SpeakerWaveIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
