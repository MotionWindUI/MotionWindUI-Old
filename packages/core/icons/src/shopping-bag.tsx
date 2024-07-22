import { ShoppingBagIcon as IconFilled } from "@heroicons/react/24/solid";
import { ShoppingBagIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ShoppingBagIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ShoppingBagIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ShoppingBagIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
