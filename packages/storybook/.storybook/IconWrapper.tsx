// IconWrapper.tsx
import React from "react";

interface IconWrapperProps {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | null;
    color?: string;
    [key: string]: any;
}

const IconWrapper: React.FC<IconWrapperProps> = ({
    icon: Icon,
    color = "currentColor",
    ...props
}) => {
    return Icon ? (
        <Icon color={color} {...props} width={40} height={40} />
    ) : null;
};

export default IconWrapper;
