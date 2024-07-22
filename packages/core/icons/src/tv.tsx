import { TvIcon as IconFilled } from "@heroicons/react/24/solid";
import { TvIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type TvIconProps = IconSvgProps & {
    filled?: boolean;
};

export const TvIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: TvIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
