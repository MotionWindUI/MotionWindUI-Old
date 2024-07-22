import { MegaphoneIcon as IconFilled } from "@heroicons/react/24/solid";
import { MegaphoneIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type MegaphoneIconProps = IconSvgProps & {
    filled?: boolean;
};

export const MegaphoneIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: MegaphoneIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
