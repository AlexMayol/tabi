import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Tabs, Typography } from "./components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Typography as="h1">Hello, Emanuele! </Typography>
    <div className="container">
      <Tabs variant="underline" defaultIndex={0}>
        <Tabs.List>
          <Tabs.Tab badge={{ label: "Test", variant: "positive" }} index={0}>
            Tab pill 1
          </Tabs.Tab>
          <Tabs.Tab index={1}>Tab pill 2</Tabs.Tab>
          <Tabs.Tab index={2}>Tab pill 3</Tabs.Tab>
          <Tabs.Tab badge={{ label: "Test", variant: "neutral" }} index={3}>
            Tab pill 4
          </Tabs.Tab>
          <Tabs.Tab index={4}>Tab pill 5</Tabs.Tab>
          <Tabs.Tab badge={{ label: "Test", variant: "negative" }} index={5}>
            Tab pill 6
          </Tabs.Tab>
          <Tabs.Tab index={6}>Tab pill 7</Tabs.Tab>
          <Tabs.Tab index={7}>Tab pill 8</Tabs.Tab>
          <Tabs.Tab index={8}>Tab pill 9</Tabs.Tab>
          <Tabs.Tab index={9}>Tab pill 10</Tabs.Tab>
          <Tabs.Tab index={10}>Tab pill 11</Tabs.Tab>
          <Tabs.Tab index={11}>Tab pill 12</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel index={0}>
          <Typography as="h2">Content for Tab 1</Typography>
          <Typography>I default to be a paragraph tag.</Typography>
        </Tabs.Panel>

        <Tabs.Panel index={1}>
          <Typography as="h2">Content for Tab 2</Typography>
          <Typography>This is the content for the second tab.</Typography>
        </Tabs.Panel>

        <Tabs.Panel index={2}>
          <Typography as="h2">Content for Tab 3</Typography>
          <Typography>This is the content for the second tab.</Typography>
        </Tabs.Panel>
        <Tabs.Panel index={3}>
          <Typography as="h2">Content for Tab X</Typography>
          <Typography>This is the content for the second tab.</Typography>
        </Tabs.Panel>
        <Tabs.Panel index={4}>
          <Typography as="h2">Content for Tab X</Typography>
          <Typography>This is the content for the second tab.</Typography>
        </Tabs.Panel>
        <Tabs.Panel index={5}>
          <Typography as="h2">Content for Tab X</Typography>
          <Typography>This is the content for the second tab.</Typography>
        </Tabs.Panel>
        <Tabs.Panel index={6}>
          <Typography as="h2">Content for Tab X</Typography>
          <Typography>This is the content for the second tab.</Typography>
        </Tabs.Panel>
        <Tabs.Panel index={7}>
          <Typography as="h2">Content for Tab X</Typography>
          <Typography>This is the content for the second tab.</Typography>
        </Tabs.Panel>
        <Tabs.Panel index={8}>
          <Typography as="h2">Content for Tab X</Typography>
          <Typography>This is the content for the second tab.</Typography>
        </Tabs.Panel>
        <Tabs.Panel index={9}>
          <Typography as="h2">Content for Tab X</Typography>
          <Typography>This is the content for the second tab.</Typography>
        </Tabs.Panel>
        <Tabs.Panel index={10}>
          <Typography as="h2">Content for Tab X</Typography>
          <Typography>This is the content for the second tab.</Typography>
        </Tabs.Panel>
        <Tabs.Panel index={11}>
          <Typography as="h2">Content for Tab X</Typography>
          <Typography>This is the content for the second tab.</Typography>
        </Tabs.Panel>
      </Tabs>
      <hr />
      <Tabs variant="pill" defaultIndex={0}>
        <Tabs.List>
          <Tabs.Tab badge={{ label: "Test", variant: "positive" }} index={0}>
            Tab pill 1
          </Tabs.Tab>
          <Tabs.Tab index={1}>Tab pill 2</Tabs.Tab>
          <Tabs.Tab index={2}>Tab pill 3</Tabs.Tab>
          <Tabs.Tab badge={{ label: "Test", variant: "neutral" }} index={3}>
            Tab pill 4
          </Tabs.Tab>
          <Tabs.Tab index={4}>Tab pill 5</Tabs.Tab>
          <Tabs.Tab badge={{ label: "Test", variant: "negative" }} index={5}>
            Tab pill 6
          </Tabs.Tab>
          <Tabs.Tab index={6}>Tab pill 7</Tabs.Tab>
          <Tabs.Tab index={7}>Tab pill 8</Tabs.Tab>
          <Tabs.Tab index={8}>Tab pill 9</Tabs.Tab>
          <Tabs.Tab index={9}>Tab pill 10</Tabs.Tab>
          <Tabs.Tab index={10}>Tab pill 11</Tabs.Tab>
          <Tabs.Tab index={11}>Tab pill 12</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel index={0}>
          <Typography as="h2">Content for Tab 1</Typography>
          <Typography>I default to be a paragraph tag.</Typography>
        </Tabs.Panel>

        <Tabs.Panel index={1}>
          <Typography as="h2">Content for Tab 2</Typography>
          <Typography>This is the content for the second tab.</Typography>
        </Tabs.Panel>

        <Tabs.Panel index={2}>
          <Typography as="h2">Content for Tab 3</Typography>
          <Typography>This is the content for the second tab.</Typography>
        </Tabs.Panel>
        <Tabs.Panel index={3}>
          <Typography as="h2">Content for Tab X</Typography>
          <Typography>This is the content for the second tab.</Typography>
        </Tabs.Panel>
        <Tabs.Panel index={4}>
          <Typography as="h2">Content for Tab X</Typography>
          <Typography>This is the content for the second tab.</Typography>
        </Tabs.Panel>
        <Tabs.Panel index={5}>
          <Typography as="h2">Content for Tab X</Typography>
          <Typography>This is the content for the second tab.</Typography>
        </Tabs.Panel>
        <Tabs.Panel index={6}>
          <Typography as="h2">Content for Tab X</Typography>
          <Typography>This is the content for the second tab.</Typography>
        </Tabs.Panel>
        <Tabs.Panel index={7}>
          <Typography as="h2">Content for Tab X</Typography>
          <Typography>This is the content for the second tab.</Typography>
        </Tabs.Panel>
        <Tabs.Panel index={8}>
          <Typography as="h2">Content for Tab X</Typography>
          <Typography>This is the content for the second tab.</Typography>
        </Tabs.Panel>
        <Tabs.Panel index={9}>
          <Typography as="h2">Content for Tab X</Typography>
          <Typography>This is the content for the second tab.</Typography>
        </Tabs.Panel>
        <Tabs.Panel index={10}>
          <Typography as="h2">Content for Tab X</Typography>
          <Typography>This is the content for the second tab.</Typography>
        </Tabs.Panel>
        <Tabs.Panel index={11}>
          <Typography as="h2">Content for Tab X</Typography>
          <Typography>This is the content for the second tab.</Typography>
        </Tabs.Panel>
      </Tabs>
    </div>
  </React.StrictMode>,
);
