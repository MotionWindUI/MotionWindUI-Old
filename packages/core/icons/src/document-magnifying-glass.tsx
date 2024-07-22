import { DocumentMagnifyingGlassIcon as IconFilled } from "@heroicons/react/24/solid";
import { DocumentMagnifyingGlassIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type DocumentMagnifyingGlassIconProps = IconSvgProps & {
    filled?: boolean;
};

export const DocumentMagnifyingGlassIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: DocumentMagnifyingGlassIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
