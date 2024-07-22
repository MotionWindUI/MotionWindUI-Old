import { VariableIcon as IconFilled } from "@heroicons/react/24/solid";
import { VariableIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type VariableIconProps = IconSvgProps & {
    filled?: boolean;
};

export const VariableIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: VariableIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
