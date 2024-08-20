/* eslint-disable no-console */
import Checkbox from "../src/Checkbox";
import CheckboxGroup from "../src/CheckboxGroup";
import type { Meta, StoryObj } from "@storybook/react";
import { Controller, useForm } from "react-hook-form";
import Button from "../../button/src/Button";
import React from "react";

const meta = {
  title: "Components/Checkbox Group",
  component: CheckboxGroup,
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
    description: {
      description: "The description for the component",
      control: { type: "text" },
      table: {
        type: { summary: "string" },
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
  },
} satisfies Meta<typeof CheckboxGroup>;

export default meta;

type Story = StoryObj<typeof CheckboxGroup>;

const StoryTemplate: Story = {
  args: {
    label: "Checkbox Group",
    description: "This is a checkbox group",
  },
  render: ({ ...args }) => {
    return (
      <CheckboxGroup {...args}>
        <Checkbox value="1">Checkbox 1</Checkbox>
        <Checkbox value="2">Checkbox 2</Checkbox>
        <Checkbox value="3">Checkbox 3</Checkbox>
      </CheckboxGroup>
    );
  },
  parameters: {
    control: {
      exclude: /children$|classNames$|className$/,
    },
  },
};

export const Default: Story = StoryTemplate;

export const Disabled: Story = {
  ...StoryTemplate,
  args: {
    isDisabled: true,
  },
};

export const DefaultValues: Story = {
  ...StoryTemplate,
  args: {
    label: "Please select one or more options",
    description: "You can select multiple options",
  },
  render: ({ ...args }) => {
    const defaultValues = ["dogs", "fish"];

    return (
      <CheckboxGroup {...args} value={defaultValues}>
        <Checkbox value="dogs">Dogs</Checkbox>
        <Checkbox value="cats">Cats</Checkbox>
        <Checkbox value="fish">Fish</Checkbox>
        <Checkbox value="birds">Birds</Checkbox>
      </CheckboxGroup>
    );
  },
};

export const ReactHookForm: Story = {
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
    label: "Please select one or more options",
    description: "You can select multiple options",
    isRequired: true,
  },
  render: ({ ...args }) => {
    const { handleSubmit, control } = useForm({
      defaultValues: {
        pets: [],
      },
    });

    const onSubmit = (data: any) => {
      // eslint-disable-next-line no-console
      console.log(data);
      alert(data.pets);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)} className="inline-flex flex-col gap-2">
        <Controller
          control={control}
          name="pets"
          rules={{
            required: true,
          }}
          render={({ field: { name, value, onChange, ref }, fieldState: { invalid } }) => (
            <CheckboxGroup
              {...args}
              value={value}
              onChange={onChange}
              name={name}
              isInvalid={invalid}
              errorMessage="Please select at least one option"
            >
              <Checkbox value="dog" ref={ref}>
                Dog
              </Checkbox>
              <Checkbox value="cat">Cat</Checkbox>
              <Checkbox value="fish">Fish</Checkbox>
              <Checkbox value="bird">Bird</Checkbox>
            </CheckboxGroup>
          )}
        />
        <Button color={args.color} type="submit" size="md">
          Submit
        </Button>
      </form>
    );
  },
};
