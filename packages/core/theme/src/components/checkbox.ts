import { tv } from "tailwind-variants";
import { focusRing } from "../utils/focusRing";

export const checkBoxStyles = tv({
  slots: {
    base: [
      "group",
      "max-w-fit",
      "inline-flex",
      "items-center",
      "justify-start",
      "cursor-pointer",
      "p-2",
      "-m-2",
      ...focusRing,
    ],
    icon: "z-10 w-4 h-3 opacity-0 group-data-[selected=true]:opacity-100",
    label: "select-none relative",
  },
});
