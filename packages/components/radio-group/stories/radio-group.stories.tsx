import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { RadioGroup } from "../src";
import Radio from "../src/Radio";
import Button from "../../button/src/Button";
import { Controller, useForm } from "react-hook-form";
import { RadioProps, useRadio } from "../src/useRadio";
import { clsxMerge } from "@motionwindui/dev-utils";
import { VisuallyHidden } from "react-aria";
import { CheckCircleIcon } from "../../../core/icons/src/check-circle";

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
      table: {
        type: { summary: "string | React.ReactNode" },
      },
    },
    description: {
      control: { type: "text" },
    },
    errorMessage: {
      control: { type: "text" },
    },
    value: {
      control: { type: "text" },
    },
    validationBehavior: {
      control: {
        type: "select",
      },
      options: ["aria", "native"],
      table: {
        defaultValue: {
          detail: "aria",
        },
      },
    },
    isReadOnly: {
      control: {
        type: "boolean",
      },
    },
    isRequired: {
      control: {
        type: "boolean",
      },
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
  parameters: {
    controls: {
      exclude: /ref$|classList$|className$|children$/,
    },
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

export const SelectedValue: Story = {
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
    value: "dog",
  },
};

export const Invalid: Story = {
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
    isInvalid: true,
  },
};

export const Disabled: Story = {
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
    isDisabled: true,
  },
};

export const ReadOnly: Story = {
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
    isReadOnly: true,
  },
};

export const Controlled: Story = {
  ...StoryTemplate,
  render: ({ ...args }) => {
    const [pet, setPet] = useState("dog");

    return (
      <div>
        <RadioGroup {...args} onChange={(value) => setPet(value)} value={pet}>
          <Radio value="dog">Dog</Radio>
          <Radio value="cat">Cat</Radio>
          <Radio value="fish">Fish</Radio>
          <Radio value="bird">Bird</Radio>
        </RadioGroup>
        <p>Currently selected: {pet}</p>
      </div>
    );
  },
};

export const ReactHookForm: Story = {
  ...StoryTemplate,
  args: {
    ...StoryTemplate.args,
    isRequired: true,
  },
  render: ({ ...args }) => {
    const { handleSubmit, control } = useForm({
      defaultValues: {
        pets: "",
      },
    });

    const onSubmit = (data: any) => {
      alert(data.pets);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)} className="inline-flex flex-col gap-2">
        <Controller
          control={control}
          name="pets"
          rules={{ required: true }}
          render={({ field: { name, value, onChange, ref }, fieldState: { invalid } }) => (
            <RadioGroup
              {...args}
              name={name}
              value={value}
              onChange={onChange}
              isInvalid={invalid}
              errorMessage="Please select a pet"
            >
              <Radio value="dog" ref={ref}>
                Dog
              </Radio>
              <Radio value="cat">Cat</Radio>
              <Radio value="fish">Fish</Radio>
              <Radio value="bird">Bird</Radio>
            </RadioGroup>
          )}
        />
        <Button color={args.color} type="submit">
          Submit
        </Button>
      </form>
    );
  },
};

const CustomRadioComp = (props: RadioProps) => {
  const { children, ...restProps } = props;

  return (
    <Radio
      {...restProps}
      classList={{
        base: clsxMerge(
          "inline-flex hover:bg-neutral-subtle items-center justify-between flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-neutral-subtle m-2 data-[pressed=true]:scale-95 data-[selected=true]:border-primary",
        ),
      }}
    >
      {children}
    </Radio>
  );
};

export const CustomRadio: Story = {
  ...StoryTemplate,
  render: ({ ...args }) => {
    const availableTiers = [
      {
        label: "Free",
        value: "free",
        price: "$0.00",
      },
      {
        label: "Pro",
        value: "prop",
        price: "$1.00 Per Month",
      },
      {
        label: "Enterprise",
        value: "enterprise",
        price: "Contact Us",
      },
    ];

    return (
      <RadioGroup
        {...args}
        label="Select the plan that's right for you"
        description="Don't worry you can change it later!"
        classList={{ base: "gap-2" }}
      >
        {availableTiers.map((tier) => (
          <CustomRadioComp key={tier.label} value={tier.value} description={tier.price}>
            {tier.label}
          </CustomRadioComp>
        ))}
      </RadioGroup>
    );
  },
};

const CustomRadioHook = (props: RadioProps) => {
  const {
    RootComponent,
    children,
    description,
    rootProps,
    wrapperProps,
    inputProps,
    labelProps,
    labelWrapperProps,
    descriptionProps,
    controlProps,
  } = useRadio(props);

  return (
    <RootComponent
      {...rootProps()}
      className={[
        "group",
        "relative",
        "inline-flex",
        "items-center",
        "cursor-pointer",
        "flex-row-reverse",
        "max-w-[300px]",
        "justify-between",
        "rounded-full",
        "bg-transparent",
        "overflow-hidden",
        "before:absolute",
        "before:top-0",
        "before:left-0",
        "before:h-0.5",
        "before:w-0",
        "before:bg-current",
        "after:absolute",
        "after:top-0",
        "after:left-0",
        "after:w-0.5",
        "after:h-0",
        "after:bg-current",
        "data-[selected=true]:before:animate-border-horizontal",
        "data-[selected=true]:after:animate-border-vertical",
      ].join(" ")}
    >
      <VisuallyHidden elementType="span">
        <input {...inputProps()} />
      </VisuallyHidden>
      <span {...wrapperProps()} className="w-6 h-6">
        <CheckCircleIcon
          filled={true}
          className="text-primary opacity-0 group-data-[selected=true]:opacity-100 transition-opacity"
        />
      </span>
      <div {...labelWrapperProps()}>
        {children && <span {...labelProps()}>{children}</span>}
        {description && <span {...descriptionProps()}>{description}</span>}
      </div>
    </RootComponent>
  );
};

export const FullyCustomized: Story = {
  ...StoryTemplate,
  render: ({ ...args }) => {
    const availableTiers = [
      {
        label: "Free",
        value: "free",
        price: "$0.00",
      },
      {
        label: "Pro",
        value: "prop",
        price: "$1.00 Per Month",
      },
      {
        label: "Enterprise",
        value: "enterprise",
        price: "Contact Us",
      },
    ];

    return (
      <RadioGroup
        {...args}
        label="Select the plan that's right for you"
        description="Don't worry you can change it later!"
        classList={{ base: "gap-2" }}
      >
        {availableTiers.map((tier) => (
          <CustomRadioHook key={tier.label} value={tier.value} description={tier.price}>
            {tier.label}
          </CustomRadioHook>
        ))}
      </RadioGroup>
    );
  },
};
