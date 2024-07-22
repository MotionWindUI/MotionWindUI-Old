import { ShoppingCartIcon as IconFilled } from "@heroicons/react/24/solid";
import { ShoppingCartIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ShoppingCartIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ShoppingCartIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ShoppingCartIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
