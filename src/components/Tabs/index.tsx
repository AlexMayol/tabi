import {
  useState,
  createContext,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

import { Tab } from "./Tab";
import { TabPanel } from "./TabPanel";
import { TabList } from "./TabList";

type TabsContextValues = {
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  variant: TabsProps["variant"];
};
export const TabsContext = createContext<TabsContextValues | undefined>(
  undefined,
);

export type TabsProps = {
  children: ReactNode;
  defaultIndex: number;
  variant: "pill" | "underline";
};

export const Tabs = ({
  children,
  defaultIndex = 0,
  variant = "pill",
}: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const value: TabsContextValues = {
    activeIndex,
    setActiveIndex,
    variant,
  };

  return (
    <TabsContext.Provider value={value}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
};

Tabs.Tab = Tab;
Tabs.Panel = TabPanel;
Tabs.List = TabList;
