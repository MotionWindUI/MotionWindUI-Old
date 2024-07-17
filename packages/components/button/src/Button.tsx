import React from "react";

function Button() {
    return (
        <div className="flex flex-col gap-4">
            <button className="bg-[--accent-primary] text-[--text-on-primary] hover:bg-[--accent-primary-hover] hover:text-[--text-on-primary-hover]">
                Click Me
            </button>
            <button className="bg-[--accent-primary] text-[--text-on-primary] hover:brightness-90">
                Click Me
            </button>
            <button className="bg-[--accent-primary] text-[--text-on-primary] hover:opacity-90">
                Click Me
            </button>
        </div>
    );
}

export default Button;
