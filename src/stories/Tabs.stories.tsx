import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "../components/Tabs";

const meta: Meta<typeof Tabs> = {
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Pill: Story = {
  args: {
    variant: "pill",
    children: (
      <>
        <Tabs.List>
          <Tabs.Tab index={0}>Tab #1</Tabs.Tab>
          <Tabs.Tab index={1}>Tab #2</Tabs.Tab>
          <Tabs.Tab index={2}>Tab #3</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel index={0}>Random content #1</Tabs.Panel>
        <Tabs.Panel index={1}>Random content #2</Tabs.Panel>
        <Tabs.Panel index={2}>Random content #3</Tabs.Panel>
      </>
    ),
  },
};
export const Underline: Story = {
  args: {
    variant: "underline",
    children: (
      <>
        <Tabs.List>
          <Tabs.Tab index={0}>Tab #1</Tabs.Tab>
          <Tabs.Tab index={1}>Tab #2</Tabs.Tab>
          <Tabs.Tab index={2}>Tab #3</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel index={0}>Random content #1</Tabs.Panel>
        <Tabs.Panel index={1}>Random content #2</Tabs.Panel>
        <Tabs.Panel index={2}>Random content #3</Tabs.Panel>
      </>
    ),
  },
};

export const WithBadge: Story = {
  args: {
    variant: "underline",
    children: (
      <>
        <Tabs.List>
          <Tabs.Tab
            badge={{ label: "Hey, listen!", variant: "positive" }}
            index={0}
          >
            Tab #1
          </Tabs.Tab>
          <Tabs.Tab
            badge={{ label: "Yes, you!", variant: "negative" }}
            index={1}
          >
            Tab #2
          </Tabs.Tab>
          <Tabs.Tab
            badge={{ label: "Click me!", variant: "neutral" }}
            index={2}
          >
            Tab #3
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel index={0}>Random content #1</Tabs.Panel>
        <Tabs.Panel index={1}>Random content #2</Tabs.Panel>
        <Tabs.Panel index={2}>Random content #3</Tabs.Panel>
      </>
    ),
  },
};
