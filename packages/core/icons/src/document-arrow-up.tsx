import { DocumentArrowUpIcon as IconFilled } from "@heroicons/react/24/solid";
import { DocumentArrowUpIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type DocumentArrowUpIconProps = IconSvgProps & {
    filled?: boolean;
};

export const DocumentArrowUpIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: DocumentArrowUpIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
