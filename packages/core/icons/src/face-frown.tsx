import { FaceFrownIcon as IconFilled } from "@heroicons/react/24/solid";
import { FaceFrownIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type FaceFrownIconProps = IconSvgProps & {
    filled?: boolean;
};

export const FaceFrownIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: FaceFrownIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
