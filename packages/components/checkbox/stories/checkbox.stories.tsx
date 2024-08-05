import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox, CheckboxProps } from "../src";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    color: {
      description: "The color of the checkbox",
      control: { type: "select" },
      options: ["neutral", "primary", "secondary", "success", "warning", "danger"],
      table: {
        defaultValue: { summary: "neutral" },
        type: { summary: "neutral | primary | secondary | success | warning | danger" },
      },
    },
    radius: {
      description: "The radius of the checkbox",
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "full"],
      table: {
        defaultValue: { summary: "none" },
        type: { summary: "none | sm | md | lg | full" },
      },
    },
    size: {
      description: "The size of the checkbox",
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      table: {
        defaultValue: { summary: "md" },
        type: { summary: "sm | md | lg" },
      },
    },
    isDisabled: {
      description: "Whether or not the checkbox is disabled",
      type: "boolean",
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof Checkbox>;

const StoryTemplate: Story = {
  render: (args) => {
    return <Checkbox {...args} />;
  },
};

export const Default: Story = StoryTemplate;
