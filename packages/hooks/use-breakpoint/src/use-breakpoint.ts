import { useEffect, useState } from "react";
import { MediaQueryMap, UseBreakpointProps, MediaSize } from "./types";

export const useBreakpoint = ({ mediaMap, size }: UseBreakpointProps = {}) => {
  const defaultMediaQueryMap: MediaQueryMap = {
    [MediaSize.SM]: "(max-width: 640px)",
    [MediaSize.MD]: "(max-width: 768px)",
    [MediaSize.LG]: "(max-width: 1024px)",
    [MediaSize.XL]: "(max-width: 1280px)",
    [MediaSize["2XL"]]: "(min-width: 1536px)",
  };

  const mediaQueries = mediaMap || defaultMediaQueryMap;
  const [currentSize, setCurrentSize] = useState<string>(size || "");

  useEffect(() => {
    const mediaQueryLists = Object.entries(mediaQueries).map(([key, query]) => {
      return {
        size: key,
        queryList: window.matchMedia(query),
      };
    });

    const updateMediaSize = () => {
      const matchingSize = mediaQueryLists.find(({ queryList }) => queryList.matches);

      if (matchingSize) {
        setCurrentSize(matchingSize.size);
      }
    };

    // Initial check
    updateMediaSize();

    // Add listeners for each query list
    mediaQueryLists.forEach(({ queryList }) =>
      queryList.addEventListener("change", updateMediaSize),
    );

    // Cleanup listeners on unmount
    return () => {
      mediaQueryLists.forEach(({ queryList }) =>
        queryList.removeEventListener("change", updateMediaSize),
      );
    };
  }, [mediaQueries]);

  // If a size is provided, return boolean; otherwise, return current media size
  if (size) {
    const indexOfCurrent = Object.keys(mediaQueries).indexOf(currentSize);
    const indexOfTarget = Object.keys(mediaQueries).indexOf(size);

    return indexOfCurrent >= indexOfTarget;
  }

  return currentSize;
};
