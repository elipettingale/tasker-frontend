import { FunctionComponent, ReactNode, SyntheticEvent } from "react";
import styles from "./Form.module.css";

interface FormProps {
  onSubmit: (data: {}) => void;
  className?: string;
  disabled?: boolean;
  children: ReactNode;
}

const Form: FunctionComponent<FormProps> = ({
  onSubmit,
  className,
  disabled,
  children,
}) => {
  const handleOnSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;

    let data: { [key: string]: FormDataEntryValue } = {};

    for (var [key, value] of new FormData(form).entries()) {
      data[key] = value;
    }

    onSubmit(data);
  };

  return (
    <form className={`${className}  ${styles.Form}`} onSubmit={handleOnSubmit}>
      <fieldset disabled={disabled}>{children}</fieldset>
    </form>
  );
};

export default Form;
