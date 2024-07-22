import { Bars4Icon as IconFilled } from "@heroicons/react/24/solid";
import { Bars4Icon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type Bars4IconProps = IconSvgProps & {
    filled?: boolean;
};

export const Bars4Icon = ({
    filled = false,
    color = "currentColor",
    ...props
}: Bars4IconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
