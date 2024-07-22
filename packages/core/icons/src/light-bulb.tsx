import { LightBulbIcon as IconFilled } from "@heroicons/react/24/solid";
import { LightBulbIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type LightBulbIconProps = IconSvgProps & {
    filled?: boolean;
};

export const LightBulbIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: LightBulbIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
