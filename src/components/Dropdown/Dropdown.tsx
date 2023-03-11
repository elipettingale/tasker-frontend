import { FunctionComponent, ReactNode } from "react";
import styles from "./Dropdown.module.css";

interface DropdownProps {
  children: ReactNode;
}

const Dropdown: FunctionComponent<DropdownProps> = ({ children }) => {
  return <div className={styles.Dropdown}>{children}</div>;
};

export default Dropdown;
