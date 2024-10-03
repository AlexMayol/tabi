import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "../components/Badge";

const meta: Meta<typeof Badge> = {
  component: Badge,
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Neutral: Story = {
  args: {
    variant: "neutral",
    label: "Neutral badge",
  },
};
export const Positive: Story = {
  args: {
    variant: "positive",
    label: "Positive badge :)",
  },
};
export const Negative: Story = {
  args: {
    variant: "negative",
    label: "Negative badge :(",
  },
};
