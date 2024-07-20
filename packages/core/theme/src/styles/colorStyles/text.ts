import { TextColors, TextColorsPlugin } from "./types";

export const textColors: TextColors = {
    default: {
        light: "var(--neutral-900)",
        dark: "var(--neutral-100)",
    },
    subtle: {
        light: "var(--neutral-700)",
        dark: "var(--neutral-300)",
    },
    disabled: {
        light: "var(--neutral-500)",
        dark: "var(--neutral-500)",
    },
    inverse: {
        light: "var(--neutral-100)",
        dark: "var(--neutral-900)",
    },
    link: {
        light: "var(--primary-500)",
        dark: "var(--primary-500)",
    },
    "link-hover": {
        light: "var(--primary-600)",
        dark: "var(--primary-400)",
    },
    "link-active": {
        light: "var(--primary-700)",
        dark: "var(--primary-300)",
    },
    "link-visited": {
        light: "var(--primary-700)",
        dark: "var(--primary-300)",
    },
    "link-disabled": {
        light: "var(--neutral-500)",
        dark: "var(--neutral-500)",
    },
    neutral: {
        light: "var(--neutral-700)",
        dark: "var(--neutral-100)",
    },
    "neutral-hover": {
        light: "var(--neutral-800)",
        dark: "var(--neutral-200)",
    },
    "neutral-active": {
        light: "var(--neutral-900)",
        dark: "var(--neutral-300)",
    },
    "on-neutral": {
        light: "var(--neutral-50)",
        dark: "var(--neutral-950)",
    },
    "on-neutral-hover": {
        light: "var(--neutral-100)",
        dark: "var(--neutral-900)",
    },
    "on-neutral-active": {
        light: "var(--neutral-200)",
        dark: "var(--neutral-950)",
    },
    "on-neutral-disabled": {
        light: "var(--neutral-900)",
        dark: "var(--neutral-100)",
    },
    "on-neutral-subtle": {
        light: "var(--neutral-100)",
        dark: "var(--neutral-900)",
    },
    "on-neutral-subtle-subtle": {
        light: "var(--neutral-400)",
        dark: "var(--neutral-700)",
    },
    primary: {
        light: "var(--primary-700)",
        dark: "var(--primary-500)",
    },
    "primary-hover": {
        light: "var(--primary-800)",
        dark: "var(--primary-400)",
    },
    "primary-active": {
        light: "var(--primary-900)",
        dark: "var(--primary-300)",
    },
    "on-primary": {
        light: "var(--primary-50)",
        dark: "var(--primary-900)",
    },
    "on-primary-hover": {
        light: "var(--primary-100)",
        dark: "var(--primary-950)",
    },
    "on-primary-active": {
        light: "var(--primary-200)",
        dark: "var(--primary-950)",
    },
    "on-primary-disabled": {
        light: "var(--primary-900)",
        dark: "var(--primary-100)",
    },
    "on-primary-subtle": {
        light: "var(--primary-100)",
        dark: "var(--primary-900)",
    },
    "on-primary-subtle-subtle": {
        light: "var(--primary-400)",
        dark: "var(--primary-700)",
    },
    secondary: {
        light: "var(--secondary-700)",
        dark: "var(--secondary-500)",
    },
    "secondary-hover": {
        light: "var(--secondary-800)",
        dark: "var(--secondary-400)",
    },
    "secondary-active": {
        light: "var(--secondary-900)",
        dark: "var(--secondary-300)",
    },
    "on-secondary": {
        light: "var(--secondary-50)",
        dark: "var(--secondary-800)",
    },
    "on-secondary-hover": {
        light: "var(--secondary-100)",
        dark: "var(--secondary-900)",
    },
    "on-secondary-active": {
        light: "var(--secondary-200)",
        dark: "var(--secondary-950)",
    },
    "on-secondary-disabled": {
        light: "var(--secondary-900)",
        dark: "var(--secondary-100)",
    },
    "on-secondary-subtle": {
        light: "var(--secondary-100)",
        dark: "var(--secondary-900)",
    },
    "on-secondary-subtle-subtle": {
        light: "var(--secondary-400)",
        dark: "var(--secondary-700)",
    },
    success: {
        light: "var(--success-700)",
        dark: "var(--success-500)",
    },
    "success-hover": {
        light: "var(--success-800)",
        dark: "var(--success-400)",
    },
    "success-active": {
        light: "var(--success-900)",
        dark: "var(--success-300)",
    },
    "on-success": {
        light: "var(--success-50)",
        dark: "var(--success-900)",
    },
    "on-success-hover": {
        light: "var(--success-100)",
        dark: "var(--success-950)",
    },
    "on-success-active": {
        light: "var(--success-200)",
        dark: "var(--success-950)",
    },
    "on-success-disabled": {
        light: "var(--success-900)",
        dark: "var(--success-100)",
    },
    "on-success-subtle": {
        light: "var(--success-100)",
        dark: "var(--success-900)",
    },
    "on-success-subtle-subtle": {
        light: "var(--success-400)",
        dark: "var(--success-700)",
    },
    warning: {
        light: "var(--warning-700)",
        dark: "var(--warning-500)",
    },
    "warning-hover": {
        light: "var(--warning-800)",
        dark: "var(--warning-400)",
    },
    "warning-active": {
        light: "var(--warning-900)",
        dark: "var(--warning-300)",
    },
    "on-warning": {
        light: "var(--warning-50)",
        dark: "var(--warning-900)",
    },
    "on-warning-hover": {
        light: "var(--warning-100)",
        dark: "var(--warning-950)",
    },
    "on-warning-active": {
        light: "var(--warning-200)",
        dark: "var(--warning-950)",
    },
    "on-warning-disabled": {
        light: "var(--warning-900)",
        dark: "var(--warning-100)",
    },
    "on-warning-subtle": {
        light: "var(--warning-100)",
        dark: "var(--warning-900)",
    },
    "on-warning-subtle-subtle": {
        light: "var(--warning-400)",
        dark: "var(--warning-700)",
    },
    danger: {
        light: "var(--danger-700)",
        dark: "var(--danger-500)",
    },
    "danger-hover": {
        light: "var(--danger-800)",
        dark: "var(--danger-400)",
    },
    "danger-active": {
        light: "var(--danger-900)",
        dark: "var(--danger-300)",
    },
    "on-danger": {
        light: "var(--danger-50)",
        dark: "var(--danger-900)",
    },
    "on-danger-hover": {
        light: "var(--danger-100)",
        dark: "var(--danger-950)",
    },
    "on-danger-active": {
        light: "var(--danger-200)",
        dark: "var(--danger-950)",
    },
    "on-danger-disabled": {
        light: "var(--danger-900)",
        dark: "var(--danger-100)",
    },
    "on-danger-subtle": {
        light: "var(--danger-100)",
        dark: "var(--danger-900)",
    },
    "on-danger-subtle-subtle": {
        light: "var(--danger-400)",
        dark: "var(--danger-700)",
    },
};

export const textColorsPlugin: TextColorsPlugin = {
    default: "var(--text-default)",
    subtle: "var(--text-subtle)",
    disabled: "var(--text-disabled)",
    inverse: "var(--text-inverse)",
    link: "var(--text-link)",
    "link-hover": "var(--text-link-hover)",
    "link-active": "var(--text-link-active)",
    "link-visited": "var(--text-link-visited)",
    "link-disabled": "var(--text-link-disabled)",
    neutral: "var(--text-neutral)",
    "neutral-hover": "var(--text-neutral-hover)",
    "neutral-active": "var(--text-neutral-active)",
    "on-neutral": "var(--text-on-neutral)",
    "on-neutral-hover": "var(--text-on-neutral-hover)",
    "on-neutral-active": "var(--text-on-neutral-active)",
    "on-neutral-disabled": "var(--text-on-neutral-disabled)",
    "on-neutral-subtle": "var(--text-on-neutral-subtle)",
    "on-neutral-subtle-subtle": "var(--text-on-neutral-subtle-subtle)",
    primary: "var(--text-primary)",
    "primary-hover": "var(--text-primary-hover)",
    "primary-active": "var(--text-primary-active)",
    "on-primary": "var(--text-on-primary)",
    "on-primary-hover": "var(--text-on-primary-hover)",
    "on-primary-active": "var(--text-on-primary-active)",
    "on-primary-disabled": "var(--text-on-primary-disabled)",
    "on-primary-subtle": "var(--text-on-primary-subtle)",
    "on-primary-subtle-subtle": "var(--text-on-primary-subtle-subtle)",
    secondary: "var(--text-secondary)",
    "secondary-hover": "var(--text-secondary-hover)",
    "secondary-active": "var(--text-secondary-active)",
    "on-secondary": "var(--text-on-secondary)",
    "on-secondary-hover": "var(--text-on-secondary-hover)",
    "on-secondary-active": "var(--text-on-secondary-active)",
    "on-secondary-disabled": "var(--text-on-secondary-disabled)",
    "on-secondary-subtle": "var(--text-on-secondary-subtle)",
    "on-secondary-subtle-subtle": "var(--text-on-secondary-subtle-subtle)",
    success: "var(--text-success)",
    "success-hover": "var(--text-success-hover)",
    "success-active": "var(--text-success-active)",
    "on-success": "var(--text-on-success)",
    "on-success-hover": "var(--text-on-success-hover)",
    "on-success-active": "var(--text-on-success-active)",
    "on-success-disabled": "var(--text-on-success-disabled)",
    "on-success-subtle": "var(--text-on-success-subtle)",
    "on-success-subtle-subtle": "var(--text-on-success-subtle-subtle)",
    warning: "var(--text-warning)",
    "warning-hover": "var(--text-warning-hover)",
    "warning-active": "var(--text-warning-active)",
    "on-warning": "var(--text-on-warning)",
    "on-warning-hover": "var(--text-on-warning-hover)",
    "on-warning-active": "var(--text-on-warning-active)",
    "on-warning-disabled": "var(--text-on-warning-disabled)",
    "on-warning-subtle": "var(--text-on-warning-subtle)",
    "on-warning-subtle-subtle": "var(--text-on-warning-subtle-subtle)",
    danger: "var(--text-danger)",
    "danger-hover": "var(--text-danger-hover)",
    "danger-active": "var(--text-danger-active)",
    "on-danger": "var(--text-on-danger)",
    "on-danger-hover": "var(--text-on-danger-hover)",
    "on-danger-active": "var(--text-on-danger-active)",
    "on-danger-disabled": "var(--text-on-danger-disabled)",
    "on-danger-subtle": "var(--text-on-danger-subtle)",
    "on-danger-subtle-subtle": "var(--text-on-danger-subtle-subtle)",
};
