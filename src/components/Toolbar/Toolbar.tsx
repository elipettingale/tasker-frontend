import { FunctionComponent, ReactNode } from "react";
import styles from "./Toolbar.module.css";

interface ToolbarProps {
  children: ReactNode;
}

const Toolbar: FunctionComponent<ToolbarProps> = ({ children }) => {
  return <div className={styles.Toolbar}>{children}</div>;
};

export default Toolbar;
