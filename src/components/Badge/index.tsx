import "./style.css";

export type BadgeProps = {
  variant?: "neutral" | "positive" | "negative";
  label: string;
};

export const Badge = ({ label, variant = "neutral" }: BadgeProps) => {
  const styles = {
    negative: "negative",
    positive: "positive",
    neutral: "neutral",
  };

  return <span className={`badge-base ${styles[variant]}`}>{label}</span>;
};
