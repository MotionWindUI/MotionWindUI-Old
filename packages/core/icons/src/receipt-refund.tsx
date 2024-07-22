import { ReceiptRefundIcon as IconFilled } from "@heroicons/react/24/solid";
import { ReceiptRefundIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type ReceiptRefundIconProps = IconSvgProps & {
    filled?: boolean;
};

export const ReceiptRefundIcon = ({
    filled = false,
    color = "currentColor",
    ...props
}: ReceiptRefundIconProps) =>
    filled ? (
        <IconFilled color={color} {...props} />
    ) : (
        <IconOutline color={color} {...props} />
    );
