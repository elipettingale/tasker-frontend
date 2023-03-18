import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import Button from "../Button/Button";
import Input from "../Form/components/Input/Input";
import Form from "../Form/Form";
import Icon from "../Icon/Icon";
import styles from "./NewProjectForm.module.css";
import api from "../../includes/api";
import { useOnKeyUp } from "../../hooks/useOnKeyUp";
import Repeater from "../Form/components/Repeater/Repeater";

interface NewProjectFormProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onSaved: (data: {}) => void;
}

const NewProjectForm: FunctionComponent<NewProjectFormProps> = ({
  isOpen,
  setIsOpen,
  onSaved,
}) => {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useOnKeyUp("Escape", () => {
    setIsOpen(false);
  });

  if (isOpen === false) {
    return null;
  }

  const onSubmit = (formData: {}) => {
    setIsSubmitting(true);

    api
      .post("/api/projects", formData)
      .then(({ data }) => {
        setIsSubmitting(false);
        onSaved(data);
      })
      .catch(({ response }) => {
        if (response.status === 422) {
          console.error("422 (Unprocessable Content)", response.data.errors);
          setErrors(response.data.errors);
        }

        setIsSubmitting(false);
      });
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Inner}>
        <Form onSubmit={onSubmit} disabled={isSubmitting} errors={errors}>
          <Input label="Name" name="name" />

          <Repeater label="Lists" name="lists">
            <Input label="Name" name="name" />
            <Input label="Color" name="color" />
          </Repeater>

          <Button type="submit">
            Save <Icon name="tick" />
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default NewProjectForm;
