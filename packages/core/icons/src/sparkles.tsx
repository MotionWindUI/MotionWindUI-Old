import { SparklesIcon as IconFilled } from "@heroicons/react/24/solid";
import { SparklesIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type SparklesIconProps = IconSvgProps & {
    filled?: boolean;
};

export const SparklesIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: SparklesIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
