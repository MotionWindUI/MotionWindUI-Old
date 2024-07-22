import { MicrophoneIcon as IconFilled } from "@heroicons/react/24/solid";
import { MicrophoneIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type MicrophoneIconProps = IconSvgProps & {
    filled?: boolean;
};

export const MicrophoneIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: MicrophoneIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
