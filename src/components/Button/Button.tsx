import { FunctionComponent, ReactNode } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
}

const Button: FunctionComponent<ButtonProps> = ({ children }) => {
  return <div className={styles.Button}>{children}</div>;
};

export default Button;
