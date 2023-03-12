import { ComponentPropsWithoutRef, FunctionComponent } from "react";
import styles from "./Input.module.css";

interface InputProps extends ComponentPropsWithoutRef<"input"> {}

const Input: FunctionComponent<InputProps> = ({ className, ...rest }) => {
  return <input className={`${className} ${styles.Input}`} {...rest} />;
};

export default Input;
