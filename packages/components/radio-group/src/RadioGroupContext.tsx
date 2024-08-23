import { createContext } from "@motionwindui/react-utils";
import { RadioGroupContextType } from "./RadioGroup";

export const [RadioGroupProvider, useRadioGroup] = createContext<RadioGroupContextType>({
  strict: true,
  errorMessage:
    "useRadioGroup must be used within a RadioGroupProvider. Please make sure the Radio component is used within a RadioGroup component.",
});
