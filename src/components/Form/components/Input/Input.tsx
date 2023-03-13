import { FunctionComponent, HTMLProps, ReactNode, useContext } from "react";
import { BEM } from "../../../../includes/helpers";
import useFormErrors from "../../hooks/useFormErrors";
import styles from "./Input.module.css";

interface InputProps {
  label?: string;
  name: string;
}

const Input: FunctionComponent<InputProps> = ({ name, label, ...rest }) => {
  const [hasError, errorMessage] = useFormErrors(name);

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
      {hasError ? <div className={styles.Error}>{errorMessage}</div> : null}
    </div>
  );
};

export default Input;
