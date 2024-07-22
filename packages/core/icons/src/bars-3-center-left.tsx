import { Bars3CenterLeftIcon as IconFilled } from "@heroicons/react/24/solid";
import { Bars3CenterLeftIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type Bars3CenterLeftIconProps = IconSvgProps & {
    filled?: boolean;
};

export const Bars3CenterLeftIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: Bars3CenterLeftIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
