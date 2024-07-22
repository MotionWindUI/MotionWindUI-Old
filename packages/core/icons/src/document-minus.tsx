import { DocumentMinusIcon as IconFilled } from "@heroicons/react/24/solid";
import { DocumentMinusIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type DocumentMinusIconProps = IconSvgProps & {
    filled?: boolean;
};

export const DocumentMinusIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: DocumentMinusIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
