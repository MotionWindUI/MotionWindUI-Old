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
            options: [
                "neutral",
                "primary",
                "secondary",
                "success",
                "warning",
                "danger",
            ],
            control: { type: "select" },
        },
        variant: {
            options: ["solid", "faded", "bordered", "ghost", "light"],
            control: { type: "select" },
        },
        size: {
            options: ["sm", "md", "lg"],
            control: { type: "select" },
        },
        radius: {
            options: ["none", "sm", "md", "lg", "full"],
            control: { type: "select" },
        },
        isDisabled: {
            control: { type: "boolean" },
        },
        shadow: {
            control: { type: "boolean" },
        },
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
    render: ({ ...args }) => {
        return (
            <ButtonGroup {...args}>
                <Button>Action</Button>
                <Button
                    isIconOnly
                    startContent={<IconWrapper icon={ChevronDownIcon} />}
                />
            </ButtonGroup>
        );
    },
};
