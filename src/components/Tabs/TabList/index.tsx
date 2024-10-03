import { ReactNode, useContext } from "react";

import "./style.css";
import { TabsContext } from "..";

type TabListProps = {
  children: ReactNode;
};

const prefix = `tab-list`;
export const TabList = ({ children }: TabListProps) => {
  const context = useContext(TabsContext);
  if (!context) throw new Error("Tab must be used within a Tabs provider");

  const { variant } = context;

  const styles = {
    pill: `${prefix}-pill`,
    underline: `${prefix}-underline`,
  };

  return <div className={`${prefix}-base ${styles[variant]}`}>{children}</div>;
};
