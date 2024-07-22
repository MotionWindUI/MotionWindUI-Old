import { DocumentTextIcon as IconFilled } from "@heroicons/react/24/solid";
import { DocumentTextIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type DocumentTextIconProps = IconSvgProps & {
    filled?: boolean;
};

export const DocumentTextIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: DocumentTextIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
