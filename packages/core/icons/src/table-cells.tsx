import { TableCellsIcon as IconFilled } from "@heroicons/react/24/solid";
import { TableCellsIcon as IconOutline } from "@heroicons/react/24/outline";
import { IconSvgProps } from "./types";

export type TableCellsIconProps = IconSvgProps & {
  filled?: boolean;
};

export const TableCellsIcon = ({
  filled = false,
  color = "currentColor",
  ...props
}: TableCellsIconProps) =>
  filled ? <IconFilled color={color} {...props} /> : <IconOutline color={color} {...props} />;
