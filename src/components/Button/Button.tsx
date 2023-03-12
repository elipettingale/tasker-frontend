import { ComponentPropsWithoutRef, FunctionComponent } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {}

const Button: FunctionComponent<ButtonProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <button className={`${className}  ${styles.Button}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
