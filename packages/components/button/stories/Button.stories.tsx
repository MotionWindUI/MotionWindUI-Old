import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../src";
import { iconList } from "../../../core/icons/src";
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
                    <IconWrapper icon={Icon} />,
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
                    <IconWrapper icon={Icon} />,
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
