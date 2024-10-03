import { ReactNode, useContext } from "react";
import { TabsContext } from "..";

type Props = {
  index: number;
  children: ReactNode;
};
export const TabPanel = ({ index, children }: Props) => {
  const context = useContext(TabsContext);
  if (!context) throw new Error("Tab must be used within a Tabs provider");

  const { activeIndex } = context;

  if (activeIndex !== index) {
    return null;
  }

  return <div className="tab-panel">{children}</div>;
};
