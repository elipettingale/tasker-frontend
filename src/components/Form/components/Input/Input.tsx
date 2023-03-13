import { FunctionComponent, HTMLProps, ReactNode, useContext } from "react";
import { BEM } from "../../../../includes/helpers";
import { FormContext } from "../../Form";
import styles from "./Input.module.css";

interface InputProps {
  label?: string;
  name: string;
}

const Input: FunctionComponent<InputProps> = ({ name, label, ...rest }) => {
  const formErrors = useContext<{ [key: string]: string[] }>(FormContext);
  const hasError = formErrors.hasOwnProperty(name);
  const fieldErrors = formErrors[name] ?? [];

  return (
    <div
      className={BEM(styles, "Wrapper", {
        hasError,
      })}
    >
      <label>
        {label ? <span className={styles.Label}>{label}</span> : null}
        <input className={styles.Input} name={name} {...rest} />
      </label>
      {fieldErrors.length > 0 ? (
        <div className={styles.Error}>{fieldErrors[0]}</div>
      ) : null}
    </div>
  );
};

export default Input;
