import { PhoneArrowDownLeftIcon as IconFilled } from "@heroicons/react/24/solid";
import { PhoneArrowDownLeftIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type PhoneArrowDownLeftIconProps = IconSvgProps & {
    filled?: boolean;
};

export const PhoneArrowDownLeftIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: PhoneArrowDownLeftIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
