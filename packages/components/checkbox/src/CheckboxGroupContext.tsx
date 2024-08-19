import { createContext } from "@motionwindui/react-utils";
import { CheckboxContextType } from "./CheckboxGroup";

export const [CheckboxGroupProvider, useCheckboxGroup] = createContext<CheckboxContextType>({
  name: "CheckboxGroup",
  strict: false,
});
