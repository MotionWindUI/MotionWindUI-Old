import { Squares2X2Icon as IconFilled } from "@heroicons/react/24/solid";
import { Squares2X2Icon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type Squares2X2IconProps = IconSvgProps & {
    filled?: boolean;
};

export const Squares2X2Icon = ({
    filled = false,
    color = "currentColor",
    ...props
}: Squares2X2IconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
