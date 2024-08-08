import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "../src";
import { iconList } from "../../../core/icons/src";
import IconWrapper from "../../../storybook/.storybook/IconWrapper";

const iconOptions = {
  None: null,
  ...iconList,
};

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
    isIndeterminate: {
      description: "Whether or not the checkbox is indeterminate",
      type: "boolean",
      control: {
        type: "boolean",
      },
    },
    isDisabled: {
      description: "Whether or not the checkbox is disabled",
      type: "boolean",
      control: {
        type: "boolean",
      },
    },
    isReadOnly: {
      description: "Wheter or not the checkbox can be modified",
      type: "boolean",
      control: {
        type: "boolean",
      },
    },
    children: {
      description: "The children for this component",
      control: { type: "text" },
      table: {
        type: { summary: "React.ReactNode" },
      },
    },
    className: {
      description: "Any additional custom classes for the component",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
        disable: true,
      },
    },
    icon: {
      options: Object.keys(iconOptions),
      mapping: Object.fromEntries(
        Object.entries(iconOptions).map(([key, Icon]) => [
          key,
          <IconWrapper key={key} icon={Icon} height={24} width={24} />,
        ]),
      ),
      control: {
        type: "select",
      },
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof Checkbox>;

const StoryTemplate: Story = {
  args: {
    children: "Checkbox",
  },
  render: ({ children, ...args }) => {
    return <Checkbox {...args}>{children}</Checkbox>;
  },
};

export const Default: Story = StoryTemplate;

export const CustomCheckbox: Story = {
  args: {
    children: "Checkbox",
    className: "bg-neutral-subtle data-[selected=true]:outline-primary-600",
    classNames: {
      icon: "text-blue-500",
    },
  },
  render: ({ ...args }) => {
    return (
      <Checkbox {...args}>
        <div className="bg-neutral-subtle inline-flex w-96 justify-between">
          <div>Yep</div>
          <div>Nope</div>
        </div>
      </Checkbox>
    );
  },
  // Override so that we can see the className and classNames props in the controls for this story
  parameters: {
    controls: {},
  },
};
