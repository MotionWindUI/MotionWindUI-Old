import { TicketIcon as IconFilled } from "@heroicons/react/24/solid";
import { TicketIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type TicketIconProps = IconSvgProps & {
    filled?: boolean;
};

export const TicketIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: TicketIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
