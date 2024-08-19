import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";
import "jest-axe/extend-expect";

const { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);

if (typeof window.matchMedia !== "function") {
  Object.defineProperty(window, "matchMedia", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
}

global.TextEncoder = require("util").TextEncoder;

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));
