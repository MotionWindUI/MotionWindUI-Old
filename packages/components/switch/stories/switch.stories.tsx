import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "../src";
import { iconList, IconWrapper } from "@motionwindui/heroicons-icons";

const iconOptions = {
  None: null,
  ...iconList,
};

const meta = {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
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
    children: {
      control: {
        type: "text",
      },
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
    },
    startContent: {
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
    endContent: {
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
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof Switch>;

const StoryTemplate: Story = {
  args: {
    children: "Label",
  },
  render: (args) => {
    return <Switch {...args} />;
  },
};

export const Default: Story = StoryTemplate;
