import {
  createContext,
  FunctionComponent,
  ReactNode,
  SyntheticEvent,
} from "react";
import styles from "./Form.module.css";

interface FormProps {
  onSubmit: (data: {}) => void;
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
    const formData = getFormData(event.target as HTMLFormElement);
    onSubmit(formData);
  };

  return (
    <form className={`${className}  ${styles.Form}`} onSubmit={handleOnSubmit}>
      <FormContext.Provider value={errors}>
        <fieldset disabled={disabled}>{children}</fieldset>
      </FormContext.Provider>
    </form>
  );
};

function getFormData(form: HTMLFormElement) {
  let data: { [key: string]: FormDataEntryValue } = {};

  for (var [key, value] of new FormData(form).entries()) {
    data[key] = value;
  }

  return data;
}

export default Form;
