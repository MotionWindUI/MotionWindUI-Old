import { cva } from "class-variance-authority";

const buttonStyle = cva(["flex", "flex-co"], {
    variants: {
        intent: {
            primary: "bg-",
        },
    },
});
