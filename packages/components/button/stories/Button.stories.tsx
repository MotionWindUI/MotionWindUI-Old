import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../src";
import { AcademicCapIcon, iconList } from "../../../core/icons/src";
import IconWrapper from "../../../storybook/.storybook/IconWrapper";

const iconOptions = {
  None: null,
  ...iconList,
};

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
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
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

const StoryTemplate: Story = {
  args: {
    children: "Button",
  },
  render: ({ children, ...args }) => {
    return <Button {...args}>{children}</Button>;
  },
};

export const Default: Story = StoryTemplate;

export const Primary: Story = {
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
    color: "primary",
  },
};

export const Secondary: Story = {
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
    color: "secondary",
  },
};

export const Success: Story = {
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
    color: "success",
  },
};

export const Warning: Story = {
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
    color: "warning",
  },
};

export const Danger: Story = {
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
    color: "danger",
  },
};

export const IconOnly: Story = {
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
    isIconOnly: true,
    startContent: <IconWrapper icon={AcademicCapIcon} height={24} width={24} />,
  },
};
