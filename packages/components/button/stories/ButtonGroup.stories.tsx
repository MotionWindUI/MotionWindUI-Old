import { Meta, StoryObj } from "@storybook/react/*";
import ButtonGroup from "../src/ButtonGroup";
import { Button } from "../src";
import IconWrapper from "../../../storybook/.storybook/IconWrapper";
import { ChevronDownIcon } from "../../../core/icons/src";

const meta = {
  title: "Components/Button Group",
  component: ButtonGroup,
} satisfies Meta<typeof ButtonGroup>;

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

const StoryTemplate: Story = {
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
    variant: {
      options: ["solid", "faded", "bordered", "ghost", "light"],
      control: { type: "select" },
      description: "The variation style of the button group.",
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
      description: "The size of the button group.",
    },
    radius: {
      options: ["none", "sm", "md", "lg", "full"],
      control: { type: "select" },
      description: "The border radius of the button group.",
    },
    isDisabled: {
      control: { type: "boolean" },
      description: "Whether or not this button is disabled.",
    },
    shadow: {
      control: { type: "boolean" },
    },
  },
  args: {
    color: "neutral",
    variant: "solid",
    size: "md",
    radius: "md",
    isDisabled: false,
  },
  render: ({ ...args }) => {
    return (
      <ButtonGroup {...args}>
        <Button>Cut</Button>
        <Button>Copy</Button>
        <Button>Paste</Button>
      </ButtonGroup>
    );
  },
};

export const Default: Story = StoryTemplate;

export const DifferentStyles: Story = {
  ...StoryTemplate,
  render: ({ ...args }) => {
    return (
      <ButtonGroup {...args}>
        <Button>One</Button>
        <Button>Two</Button>
        <Button variant="bordered">Three</Button>
        <Button>Four</Button>
      </ButtonGroup>
    );
  },
};

export const WithIconOnly: Story = {
  ...StoryTemplate,
  parameters: {
    controls: {
      exclude: /children/g,
    },
  },
  render: ({ ...args }) => {
    return (
      <ButtonGroup {...args}>
        <Button>Action</Button>
        <Button isIconOnly startContent={<IconWrapper icon={ChevronDownIcon} />} />
      </ButtonGroup>
    );
  },
};
