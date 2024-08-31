import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Input, InputProps } from "../src";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    controls: {
      exclude: /ref$|className$/,
    },
  },
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Label for the input",
    },
    labelPlacement: {
      control: { type: "select" },
      options: ["top", "left"],
      description: "Label placement for the input",
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder for the input",
    },
    description: {
      control: { type: "text" },
      description: "Description for the input",
    },
    errorMessage: {
      control: { type: "text" },
      description: "Error message for the input",
    },
    color: {
      control: { type: "select" },
      options: ["neutral", "primary", "secondary", "success", "warning", "danger"],
    },
    radius: {
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "full"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
    isInvalid: {
      control: {
        type: "boolean",
      },
    },
    isReadOnly: {
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

const StoryTemplate: Story = {
  args: {
    label: "Label",
  },
  render: (args) => {
    return <Input {...args} />;
  },
};

export const Default: Story = StoryTemplate;
