import { CurrencyYenIcon as IconFilled } from "@heroicons/react/24/solid";
import { CurrencyYenIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type CurrencyYenIconProps = IconSvgProps & {
    filled?: boolean;
};

export const CurrencyYenIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: CurrencyYenIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
