import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../src";
import { iconList } from "../../../core/icons/src";
import IconWrapper from "../../../storybook/.storybook/IconWrapper";

const iconOptions = {
  None: null,
  ...iconList,
};

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    controls: {
      exclude:
        /ref$|className$|isStartContentStyled$|isEndContentStyled$|startContentProps$|endContentProps$/,
    },
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["flat", "outline"],
      description: "Variant for the input",
    },
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

export const Controlled: Story = {
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
  },
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <>
        <Input {...args} value={value} onChange={setValue} />
        <p>Value: {value}</p>
      </>
    );
  },
};

export const Clearable: Story = {
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
    label: "First Name",
  },
  render: (args) => {
    const [value, setValue] = useState("");
    const endContentProps = args.endContentProps || {
      onPress: () => {
        setValue("");
      },
    };

    return (
      <Input
        {...args}
        value={value}
        onChange={setValue}
        isEndContentButton={true}
        endContentProps={endContentProps}
        endContent={
          value !== "" ? <IconWrapper icon={iconList.XCircleIcon} height={24} width={24} /> : null
        }
      />
    );
  },
};

export const PasswordVisible: Story = {
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
    type: "password",
    label: "Password",
  },
  render: (args) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const endContentProps = args.endContentProps || {
      onPress: () => {
        setIsPasswordVisible(!isPasswordVisible);
      },
    };

    return (
      <Input
        {...args}
        type={isPasswordVisible ? "text" : "password"}
        isEndContentButton={true}
        endContentProps={endContentProps}
        endContent={
          <IconWrapper
            icon={isPasswordVisible ? iconList.EyeSlashIcon : iconList.EyeIcon}
            height={24}
            width={24}
          />
        }
      />
    );
  },
};
