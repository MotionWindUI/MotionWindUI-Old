import React from "react";
import { ButtonProps } from "./Button";

/**
 * Properties of the ButtonGroup component.
 */
export interface ButtonGroupContextProps {
    color?: ButtonProps["color"];
    variant?: ButtonProps["variant"];
    size?: ButtonProps["size"];
    radius?: ButtonProps["radius"];
    shadow?: boolean;
    isDisabled?: boolean;
    animateDisable?: boolean;
    children?: React.ReactNode;
}

/**
 * Context for the ButtonGroup component.
 */
const ButtonGroupContext = React.createContext<ButtonGroupContextProps | null>(
    null,
);

export default ButtonGroupContext;

/**
 * Provider for the ButtonGroup context.
 */
export const ButtonGroupProvider = (props: ButtonGroupContextProps) => {
    return (
        <ButtonGroupContext.Provider value={props}>
            {props.children}
        </ButtonGroupContext.Provider>
    );
};

/**
 * Hook to get the ButtonGroup context.
 */
export const useButtonGroupContext = () => {
    // NOTE: A null context value is ok. A null context value means that there is no ButtonGroup.
    return React.useContext(ButtonGroupContext);
};
