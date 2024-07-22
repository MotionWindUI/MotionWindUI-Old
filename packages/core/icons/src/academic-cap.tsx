import { AcademicCapIcon as IconFilled } from "@heroicons/react/24/solid";
import { AcademicCapIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type AcademicCapIconProps = IconSvgProps & {
    filled?: boolean;
};

export const AcademicCapIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: AcademicCapIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
