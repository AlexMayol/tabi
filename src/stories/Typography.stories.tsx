import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "../components/Typography";

const meta: Meta<typeof Typography> = {
  component: Typography,
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Headings: Story = {
  args: {
    as: "h1",
    children: "This is an H1",
  },
};
export const Paragraph: Story = {
  args: {
    as: "h1",
    children: "This is just a paragraph",
  },
};
export const Code: Story = {
  args: {
    as: "code",
    children: "This is some code",
  },
};
export const SmallSize: Story = {
  args: {
    size: "small",
    children: "This is smol!",
  },
};
