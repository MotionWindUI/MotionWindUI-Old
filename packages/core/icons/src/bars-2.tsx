import { Bars2Icon as IconFilled } from "@heroicons/react/24/solid";
import { Bars2Icon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type Bars2IconProps = IconSvgProps & {
    filled?: boolean;
};

export const Bars2Icon = ({
    filled = false,
    color = "currentColor",
    ...props
}: Bars2IconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
