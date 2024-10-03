import "./style.css";

import { TypographyProps } from "./types";

export const Typography = ({
  size = "regular",
  as = "p",
  children,
}: TypographyProps) => {
  const Tag = as;
  const sizes = {
    regular: "regular",
    small: "small",
  };

  return <Tag className={`typography-base ${sizes[size]}`}>{children}</Tag>;
};
