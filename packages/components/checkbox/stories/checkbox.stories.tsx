import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Controller, useForm } from "react-hook-form";

import { Checkbox } from "../src";
import { HeartIcon, iconList } from "../../../core/icons/src";
import IconWrapper from "../../../storybook/.storybook/IconWrapper";
import { Button } from "../../button/src";

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
    children: "Example Label",
  },
  parameters: {
    controls: {
      exclude: /icon$|classNames$|className$/,
    },
  },
  render: ({ children, ...args }) => {
    return <Checkbox {...args}>{children}</Checkbox>;
  },
};

export const Default: Story = StoryTemplate;

export const WithDescription: Story = {
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
    description: "This is for a newsletter",
  },
};

export const Controlled: Story = {
  ...StoryTemplate,
  args: {
    children: "Subscribe",
  },
  render: ({ children, ...args }) => {
    const [subscribed, setSubscribed] = useState(true);

    return (
      <div>
        <Checkbox {...args} isSelected={subscribed} onChange={setSubscribed}>
          {children}
        </Checkbox>
        <p className="text-default">You are {subscribed ? "subscribed" : "not subscribed"}</p>
        <Button color={args.color} onPress={() => setSubscribed(!subscribed)}>
          Toggle Change
        </Button>
      </div>
    );
  },
};

export const DefaultSelected: Story = {
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
    defaultSelected: true,
  },
};

export const Invalid: Story = {
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
    isInvalid: true,
  },
};

export const ReactHookForm: Story = {
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
    children: "I accept the terms and conditions",
  },
  render: ({ children, ...args }) => {
    let { handleSubmit, control } = useForm({
      defaultValues: {
        agreeToTerms: "",
      },
    });
    let onSubmit = (data: any) => {
      // eslint-disable-next-line no-console
      console.log(data);
      alert(data.agreeToTerms);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)} className="inline-flex flex-col gap-2">
        <Controller
          control={control}
          name="agreeToTerms"
          rules={{ required: true }}
          render={({ field: { name, value, onChange, ref }, fieldState: { invalid } }) => (
            <>
              <Checkbox
                {...args}
                name={name}
                value={value}
                onChange={onChange}
                ref={ref}
                isRequired
                validationBehavior="aria"
                isInvalid={invalid}
                errorMessage="Agreement to terms and conditions is required"
              >
                {children}
              </Checkbox>
            </>
          )}
        />
        <Button color={args.color} type="submit" size="md">
          Submit
        </Button>
      </form>
    );
  },
};

export const CustomIcon: Story = {
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
    icon: <HeartIcon />,
  },
  parameters: {
    controls: {
      exclude: /className$|classNames$/,
    },
  },
};

export const CustomDesign: Story = {
  args: {
    children: "Checkbox",
    className:
      "data-[selected=true]:outline-primary-600 data-[selected=true]:outline hover:bg-neutral-subtle-hover rounded-medium",
    classNames: {
      wrapper: "mr-3 align-middle",
      icon: "text-blue-500",
    },
  },
  render: ({ ...args }) => {
    return (
      <Checkbox {...args}>
        <div className="align-baseline inline-flex w-96 justify-between group-data-[selected=true]:outline group-data-[selected=true]:outline-primary-600">
          <div>Yep</div>
          <div>Nope</div>
        </div>
      </Checkbox>
    );
  },
  // Override so that we can see the className and classNames props in the controls for this story
  parameters: {
    controls: {
      exclude: /icon$/,
    },
  },
};
