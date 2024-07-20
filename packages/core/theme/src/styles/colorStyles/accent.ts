import { AccentColors, AccentColorsPlugin } from "./types";

export const accentColors: AccentColors = {
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
    "neutral-subtle": {
        light: "var(--neutral-100)",
        dark: "var(--neutral-950)",
    },
    "neutral-subtle-hover": {
        light: "var(--neutral-200)",
        dark: "var(--neutral-900)",
    },
    "neutral-subtle-active": {
        light: "var(--neutral-300)",
        dark: "var(--neutral-800)",
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
    "primary-subtle": {
        light: "var(--primary-100)",
        dark: "var(--primary-950)",
    },
    "primary-subtle-hover": {
        light: "var(--primary-200)",
        dark: "var(--primary-900)",
    },
    "primary-subtle-active": {
        light: "var(--primary-300)",
        dark: "var(--primary-800)",
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
    "secondary-subtle": {
        light: "var(--secondary-50)",
        dark: "var(--secondary-950)",
    },
    "secondary-subtle-hover": {
        light: "var(--secondary-100)",
        dark: "var(--secondary-900)",
    },
    "secondary-subtle-active": {
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
    "success-subtle": {
        light: "var(--success-50)",
        dark: "var(--success-950)",
    },
    "success-subtle-hover": {
        light: "var(--success-100)",
        dark: "var(--success-900)",
    },
    "success-subtle-active": {
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
    "warning-subtle": {
        light: "var(--warning-50)",
        dark: "var(--warning-950)",
    },
    "warning-subtle-hover": {
        light: "var(--warning-100)",
        dark: "var(--warning-900)",
    },
    "warning-subtle-active": {
        light: "var(--warning-200)",
        dark: "var(--warning-800)",
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
    "danger-subtle": {
        light: "var(--danger-50)",
        dark: "var(--danger-950)",
    },
    "danger-subtle-hover": {
        light: "var(--danger-100)",
        dark: "var(--danger-900)",
    },
    "danger-subtle-active": {
        light: "var(--danger-200)",
        dark: "var(--danger-800)",
    },
};

export const accentColorsPlugin: AccentColorsPlugin = {
    neutral: "var(--accent-neutral)",
    "neutral-hover": "var(--accent-neutral-hover)",
    "neutral-active": "var(--accent-neutral-active)",
    "neutral-negative": "var(--accent-neutral-negative)",
    "neutral-negative-hover": "var(--accent-neutral-negative-hover)",
    "neutral-negative-active": "var(--accent-neutral-negative-active)",
    "neutral-subtle": "var(--accent-neutral-subtle)",
    "neutral-subtle-hover": "var(--accent-neutral-subtle-hover)",
    "neutral-subtle-active": "var(--accent-neutral-subtle-active)",
    primary: "var(--accent-primary)",
    "primary-hover": "var(--accent-primary-hover)",
    "primary-active": "var(--accent-primary-active)",
    "primary-negative": "var(--accent-primary-negative)",
    "primary-negative-hover": "var(--accent-primary-negative-hover)",
    "primary-negative-active": "var(--accent-primary-negative-active)",
    "primary-subtle": "var(--accent-primary-subtle)",
    "primary-subtle-hover": "var(--accent-primary-subtle-hover)",
    "primary-subtle-active": "var(--accent-primary-subtle-active)",
    secondary: "var(--accent-secondary)",
    "secondary-hover": "var(--accent-secondary-hover)",
    "secondary-active": "var(--accent-secondary-active)",
    "secondary-negative": "var(--accent-secondary-negative)",
    "secondary-negative-hover": "var(--accent-secondary-negative-hover)",
    "secondary-negative-active": "var(--accent-secondary-negative-active)",
    "secondary-subtle": "var(--accent-secondary-subtle)",
    "secondary-subtle-hover": "var(--accent-secondary-subtle-hover)",
    "secondary-subtle-active": "var(--accent-secondary-subtle-active)",
    success: "var(--accent-success)",
    "success-hover": "var(--accent-success-hover)",
    "success-active": "var(--accent-success-active)",
    "success-negative": "var(--accent-success-negative)",
    "success-negative-hover": "var(--accent-success-negative-hover)",
    "success-negative-active": "var(--accent-success-negative-active)",
    "success-subtle": "var(--accent-success-subtle)",
    "success-subtle-hover": "var(--accent-success-subtle-hover)",
    "success-subtle-active": "var(--accent-success-subtle-active)",
    warning: "var(--accent-warning)",
    "warning-hover": "var(--accent-warning-hover)",
    "warning-active": "var(--accent-warning-active)",
    "warning-negative": "var(--accent-warning-negative)",
    "warning-negative-hover": "var(--accent-warning-negative-hover)",
    "warning-negative-active": "var(--accent-warning-negative-active)",
    "warning-subtle": "var(--accent-warning-subtle)",
    "warning-subtle-hover": "var(--accent-warning-subtle-hover)",
    "warning-subtle-active": "var(--accent-warning-subtle-active)",
    danger: "var(--accent-danger)",
    "danger-hover": "var(--accent-danger-hover)",
    "danger-active": "var(--accent-danger-active)",
    "danger-negative": "var(--accent-danger-negative)",
    "danger-negative-hover": "var(--accent-danger-negative-hover)",
    "danger-negative-active": "var(--accent-danger-negative-active)",
    "danger-subtle": "var(--accent-danger-subtle)",
    "danger-subtle-hover": "var(--accent-danger-subtle-hover)",
    "danger-subtle-active": "var(--accent-danger-subtle-active)",
};
