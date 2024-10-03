import { useContext } from "react";

import "./style.css";

import { TabsContext } from "..";
import { BadgeProps, Badge } from "../../Badge";

export type TabProps = {
  children: string;
  index: number;
  badge?: BadgeProps;
};

const prefix = "tab";
export const Tab = ({ index = 0, children, badge }: TabProps) => {
  const context = useContext(TabsContext);
  if (!context) throw new Error("Tab must be used within a Tabs provider");

  const { activeIndex, setActiveIndex, variant } = context;

  const isSelected = activeIndex === index;

  const handleClick = () => {
    setActiveIndex(index);
  };

  const variants = {
    pill: `${prefix}-pill`,
    underline: `${prefix}-underline`,
  };

  return (
    <button
      className={`${prefix}-base ${isSelected ? "selected" : ""} ${variants[variant]}`}
      onClick={handleClick}
    >
      {children}
      {badge && <Badge {...badge} />}
    </button>
  );
};
