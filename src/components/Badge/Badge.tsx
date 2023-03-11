import { FunctionComponent, ReactNode } from "react";
import styles from "./Badge.module.css";

interface BadgeProps {
  color?: `#${string}`;
  children: ReactNode;
}

const Badge: FunctionComponent<BadgeProps> = ({ color, children }) => {
  return (
    <span className={styles.Badge} style={{ backgroundColor: color }}>
      {children}
    </span>
  );
};

export default Badge;
