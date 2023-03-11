import { FunctionComponent, ReactNode } from "react";
import Badge from "../../../Badge/Badge";
import styles from "./Column.module.css";

interface ColumnProps {
  name: string;
  color: `#${string}`;
  total: number;
  children: ReactNode;
}

const Column: FunctionComponent<ColumnProps> = ({
  name,
  color,
  total,
  children,
}) => {
  return (
    <div>
      <div className={styles.Header}>
        <span className={styles.Name}>
          {name} <Badge color={color}>{total}</Badge>
        </span>
        <span
          className={styles.Underline}
          style={{ borderColor: color }}
        ></span>
      </div>
      <div className={styles.Content}>{children}</div>
    </div>
  );
};

export default Column;
