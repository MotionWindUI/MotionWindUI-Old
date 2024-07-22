import { CurrencyEuroIcon as IconFilled } from "@heroicons/react/24/solid";
import { CurrencyEuroIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type CurrencyEuroIconProps = IconSvgProps & {
    filled?: boolean;
};

export const CurrencyEuroIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: CurrencyEuroIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
