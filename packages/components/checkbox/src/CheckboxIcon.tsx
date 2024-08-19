import { SVGProps } from "react";

export type CheckboxIconProps = SVGProps<SVGSVGElement> & {
  isIndeterminate?: boolean;
  isSelected?: boolean;
  disableAnimation?: boolean;
};

export function CheckIcon(props: CheckboxIconProps) {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const { isSelected, disableAnimation, isIndeterminate, ...rest } = props;

  return (
    <svg viewBox="0 0 24 24" {...rest}>
      <path
        d="M5 12l5 5L19 7"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={0}
        strokeDashoffset={isSelected ? 22 : 44}
        style={
          !disableAnimation && isSelected
            ? {
                transition: "stroke-dashoffset 0.5s linear",
              }
            : {}
        }
      />
    </svg>
  );
}

function IndeterminateIcon(props: CheckboxIconProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const { isIndeterminate, isSelected, disableAnimation, ...otherProps } = props;

  return (
    <svg stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24" {...otherProps}>
      <line x1="21" x2="3" y1="12" y2="12" />
    </svg>
  );
}

export function CheckboxIcon(props: CheckboxIconProps) {
  const { isIndeterminate, ...rest } = props;
  const BaseIcon = isIndeterminate ? IndeterminateIcon : CheckIcon;

  return <BaseIcon {...rest} />;
}
