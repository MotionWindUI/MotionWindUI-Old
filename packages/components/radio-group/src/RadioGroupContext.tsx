import { createContext } from "@motionwindui/react-utils";
import { RadioGroupContextType } from "./useRadioGroup";

export const [RadioGroupProvider, useRadioGroupContext] = createContext<RadioGroupContextType>({
  strict: true,
  errorMessage:
    "useRadioGroup must be used within a RadioGroupProvider. Please make sure the Radio component is used within a RadioGroup component.",
});
