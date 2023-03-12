import { FunctionComponent, ReactNode } from "react";
import styles from "./Field.module.css";

interface FieldProps {
  label: string;
  children: ReactNode;
}

const Field: FunctionComponent<FieldProps> = ({ label, children }) => {
  // todo: use context to get and display error, based on passed key
  // maybe don't need to add name prop to input and can instead pass it here

  // or it could intelligently look at the children and determine the name from them
  // then actually render out all the errors for those partiuclar inputs?
  // so you could have multiple children?
  // maybe pointless tho

  return (
    <div className={styles.Field}>
      <label>
        <span className={styles.Label}>{label}</span>
        {children}
      </label>
    </div>
  );
};

export default Field;
