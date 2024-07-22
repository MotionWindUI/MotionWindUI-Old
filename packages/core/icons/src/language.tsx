import { LanguageIcon as IconFilled } from "@heroicons/react/24/solid";
import { LanguageIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type LanguageIconProps = IconSvgProps & {
    filled?: boolean;
};

export const LanguageIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: LanguageIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
