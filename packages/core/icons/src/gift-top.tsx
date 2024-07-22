import { GiftTopIcon as IconFilled } from "@heroicons/react/24/solid";
import { GiftTopIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type GiftTopIconProps = IconSvgProps & {
    filled?: boolean;
};

export const GiftTopIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: GiftTopIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
