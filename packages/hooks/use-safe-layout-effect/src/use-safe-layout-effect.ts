import React from "react";

export const useSafeLayoutEffect = window.document ? React.useLayoutEffect : React.useEffect;
