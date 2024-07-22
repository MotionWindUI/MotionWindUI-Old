import { DocumentPlusIcon as IconFilled } from "@heroicons/react/24/solid";
import { DocumentPlusIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type DocumentPlusIconProps = IconSvgProps & {
    filled?: boolean;
};

export const DocumentPlusIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: DocumentPlusIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
