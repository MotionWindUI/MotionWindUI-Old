import { EnvelopeIcon as IconFilled } from "@heroicons/react/24/solid";
import { EnvelopeIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type EnvelopeIconProps = IconSvgProps & {
    filled?: boolean;
};

export const EnvelopeIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: EnvelopeIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
