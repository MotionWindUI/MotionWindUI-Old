import { Square3Stack3DIcon as IconFilled } from "@heroicons/react/24/solid";
import { Square3Stack3DIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type Square3Stack3DIconProps = IconSvgProps & {
    filled?: boolean;
};

export const Square3Stack3DIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: Square3Stack3DIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
