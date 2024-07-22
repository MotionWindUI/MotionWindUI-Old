import { EnvelopeOpenIcon as IconFilled } from "@heroicons/react/24/solid";
import { EnvelopeOpenIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type EnvelopeOpenIconProps = IconSvgProps & {
    filled?: boolean;
};

export const EnvelopeOpenIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: EnvelopeOpenIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
