import { AdjustmentsVerticalIcon as IconFilled } from "@heroicons/react/24/solid";
import { AdjustmentsVerticalIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type AdjustmentsVerticalIconProps = IconSvgProps & {
    filled?: boolean;
};

export const AdjustmentsVerticalIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: AdjustmentsVerticalIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
