import { BorderColors, BorderColorsPlugin } from "./types";

export const borderColors: BorderColors = {
    neutral: {
        light: "var(--neutral-600)",
        dark: "var(--neutral-300)",
    },
    "neutral-hover": {
        light: "var(--neutral-700)",
        dark: "var(--neutral-200)",
    },
    "neutral-active": {
        light: "var(--neutral-800)",
        dark: "var(--neutral-100)",
    },
    "neutral-negative": {
        light: "var(--neutral-300)",
        dark: "var(--netural-700)",
    },
    "neutral-negative-hover": {
        light: "var(--neutral-200)",
        dark: "var(--neutral-800)",
    },
    "neutral-negative-active": {
        light: "var(--neutral-100)",
        dark: "var(--neutral-900)",
    },
    primary: {
        light: "var(--primary-700)",
        dark: "var(--primary-400)",
    },
    "primary-hover": {
        light: "var(--primary-800)",
        dark: "var(--primary-300)",
    },
    "primary-active": {
        light: "var(--primary-900)",
        dark: "var(--primary-200)",
    },
    "primary-negative": {
        light: "var(--primary-400)",
        dark: "var(--primary-700)",
    },
    "primary-negative-hover": {
        light: "var(--primary-300)",
        dark: "var(--primary-800)",
    },
    "primary-negative-active": {
        light: "var(--primary-200)",
        dark: "var(--primary-900)",
    },
    secondary: {
        light: "var(--secondary-600)",
        dark: "var(--secondary-400)",
    },
    "secondary-hover": {
        light: "var(--secondary-700)",
        dark: "var(--secondary-300)",
    },
    "secondary-active": {
        light: "var(--secondary-800)",
        dark: "var(--secondary-200)",
    },
    "secondary-negative": {
        light: "var(--secondary-400)",
        dark: "var(--secondary-600)",
    },
    "secondary-negative-hover": {
        light: "var(--secondary-300)",
        dark: "var(--secondary-700)",
    },
    "secondary-negative-active": {
        light: "var(--secondary-200)",
        dark: "var(--secondary-800)",
    },
    success: {
        light: "var(--success-600)",
        dark: "var(--success-400)",
    },
    "success-hover": {
        light: "var(--success-700)",
        dark: "var(--success-300)",
    },
    "success-active": {
        light: "var(--success-800)",
        dark: "var(--success-200)",
    },
    "success-negative": {
        light: "var(--success-400)",
        dark: "var(--success-600)",
    },
    "success-negative-hover": {
        light: "var(--success-300)",
        dark: "var(--success-700)",
    },
    "success-negative-active": {
        light: "var(--success-200)",
        dark: "var(--success-800)",
    },
    warning: {
        light: "var(--warning-700)",
        dark: "var(--warning-400)",
    },
    "warning-hover": {
        light: "var(--warning-800)",
        dark: "var(--warning-300)",
    },
    "warning-active": {
        light: "var(--warning-900)",
        dark: "var(--warning-200)",
    },
    "warning-negative": {
        light: "var(--warning-400)",
        dark: "var(--warning-700)",
    },
    "warning-negative-hover": {
        light: "var(--warning-300)",
        dark: "var(--warning-800)",
    },
    "warning-negative-active": {
        light: "var(--warning-200)",
        dark: "var(--warning-900)",
    },
    danger: {
        light: "var(--danger-700)",
        dark: "var(--danger-400)",
    },
    "danger-hover": {
        light: "var(--danger-800)",
        dark: "var(--danger-300)",
    },
    "danger-active": {
        light: "var(--danger-900)",
        dark: "var(--danger-200)",
    },
    "danger-negative": {
        light: "var(--danger-400)",
        dark: "var(--danger-700)",
    },
    "danger-negative-hover": {
        light: "var(--danger-300)",
        dark: "var(--danger-800)",
    },
    "danger-negative-active": {
        light: "var(--danger-200)",
        dark: "var(--danger-900)",
    },
};

export const borderColorsPlugin: BorderColorsPlugin = {
    neutral: "var(--border-neutral)",
    "neutral-hover": "var(--border-neutral-hover)",
    "neutral-active": "var(--border-neutral-active)",
    "neutral-negative": "var(--border-neutral-negative)",
    "neutral-negative-hover": "var(--border-neutral-negative-hover)",
    "neutral-negative-active": "var(--border-neutral-negative-active)",
    primary: "var(--border-primary)",
    "primary-hover": "var(--border-primary-hover)",
    "primary-active": "var(--border-primary-active)",
    "primary-negative": "var(--border-primary-negative)",
    "primary-negative-hover": "var(--border-primary-negative-hover)",
    "primary-negative-active": "var(--border-primary-negative-active)",
    secondary: "var(--border-secondary)",
    "secondary-hover": "var(--border-secondary-hover)",
    "secondary-active": "var(--border-secondary-active)",
    "secondary-negative": "var(--border-secondary-negative)",
    "secondary-negative-hover": "var(--border-secondary-negative-hover)",
    "secondary-negative-active": "var(--border-secondary-negative-active)",
    success: "var(--border-success)",
    "success-hover": "var(--border-success-hover)",
    "success-active": "var(--border-success-active)",
    "success-negative": "var(--border-success-negative)",
    "success-negative-hover": "var(--border-success-negative-hover)",
    "success-negative-active": "var(--border-success-negative-active)",
    warning: "var(--border-warning)",
    "warning-hover": "var(--border-warning-hover)",
    "warning-active": "var(--border-warning-active)",
    "warning-negative": "var(--border-warning-negative)",
    "warning-negative-hover": "var(--border-warning-negative-hover)",
    "warning-negative-active": "var(--border-warning-negative-active)",
    danger: "var(--border-danger)",
    "danger-hover": "var(--border-danger-hover)",
    "danger-active": "var(--border-danger-active)",
    "danger-negative": "var(--border-danger-negative)",
    "danger-negative-hover": "var(--border-danger-negative-hover)",
    "danger-negative-active": "var(--border-danger-negative-active)",
};
