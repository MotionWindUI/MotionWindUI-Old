import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { RadioGroup } from "../src";
import Radio from "../src/Radio";

const meta = {
  title: "Components/Radio Group",
  component: RadioGroup,
  argTypes: {
    color: {
      control: { type: "select" },
      options: ["neutral", "primary", "secondary", "success", "warning", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    children: {
      description: "The children for this component",
      control: { type: "text" },
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
    label: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;

type Story = StoryObj<typeof RadioGroup>;

const StoryTemplate: Story = {
  args: {
    label: "Pick your first pet type",
    description: "You can only pick one",
  },
  render: (args) => {
    return (
      <RadioGroup {...args}>
        <Radio value="dog" description="This is a dog">
          Dog
        </Radio>
        <Radio value="cat">Cat</Radio>
        <Radio value="fish">Fish</Radio>
        <Radio value="bird">Bird</Radio>
      </RadioGroup>
    );
  },
};

export const Default: Story = StoryTemplate;
