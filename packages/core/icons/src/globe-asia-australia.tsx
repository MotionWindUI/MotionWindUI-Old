import { GlobeAsiaAustraliaIcon as IconFilled } from "@heroicons/react/24/solid";
import { GlobeAsiaAustraliaIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type GlobeAsiaAustraliaIconProps = IconSvgProps & {
    filled?: boolean;
};

export const GlobeAsiaAustraliaIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: GlobeAsiaAustraliaIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
