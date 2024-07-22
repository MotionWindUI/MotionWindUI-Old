import { CalendarDaysIcon as IconFilled } from "@heroicons/react/24/solid";
import { CalendarDaysIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type CalendarDaysIconProps = IconSvgProps & {
    filled?: boolean;
};

export const CalendarDaysIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: CalendarDaysIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
