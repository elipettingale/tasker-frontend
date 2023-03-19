import {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useState,
  MouseEvent,
} from "react";
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Form/components/Input/Input";
import Form from "../../../../components/Form/Form";
import Icon from "../../../../components/Icon/Icon";
import styles from "./CreateForm.module.css";
import api from "../../../../includes/api";
import { useOnKeyUp } from "../../../../hooks/useOnKeyUp";
import Repeater from "../../../../components/Form/components/Repeater/Repeater";

interface CreateFormProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onSaved: (data: {}) => void;
}

const CreateForm: FunctionComponent<CreateFormProps> = ({
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

  const handleWrapperOnClick = (event: MouseEvent) => {
    if (event.target !== event.currentTarget) return;
    setIsOpen(false);
  };

  return (
    <div className={styles.Wrapper} onClick={handleWrapperOnClick}>
      <div className={styles.Inner}>
        <Form onSubmit={onSubmit} disabled={isSubmitting} errors={errors}>
          <Input label="Name" name="name" />

          <Repeater label="Lists" name="lists">
            <Input label="Name" name="name" />
            <Input label="Color" name="color" type="color" />
          </Repeater>

          <Button type="submit">
            Save <Icon name="tick" />
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateForm;
