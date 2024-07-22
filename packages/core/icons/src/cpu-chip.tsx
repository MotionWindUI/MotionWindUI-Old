import { CpuChipIcon as IconFilled } from "@heroicons/react/24/solid";
import { CpuChipIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type CpuChipIconProps = IconSvgProps & {
    filled?: boolean;
};

export const CpuChipIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: CpuChipIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
