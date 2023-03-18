import {
  createContext,
  FunctionComponent,
  ReactNode,
  SyntheticEvent,
} from "react";
import styles from "./Form.module.css";

interface FormProps {
  onSubmit: (data: FormData) => void;
  errors: {};
  className?: string;
  disabled?: boolean;
  children: ReactNode;
}

export const FormContext = createContext({});

const Form: FunctionComponent<FormProps> = ({
  onSubmit,
  errors,
  className,
  disabled,
  children,
}) => {
  const handleOnSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSubmit(new FormData(event.target as HTMLFormElement));
  };

  return (
    <form className={`${className}  ${styles.Form}`} onSubmit={handleOnSubmit}>
      <FormContext.Provider value={errors}>
        <fieldset disabled={disabled}>{children}</fieldset>
      </FormContext.Provider>
    </form>
  );
};

export default Form;
