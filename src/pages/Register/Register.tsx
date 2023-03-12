import { FunctionComponent } from "react";
import Form from "../../components/Form/Form";
import Input from "../../components/Form/components/Input/Input";
import Button from "../../components/Button/Button";
import styles from "./Register.module.css";
import Field from "../../components/Form/components/Field/Field";
import { Link, useNavigate } from "react-router-dom";

interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  const navigate = useNavigate();

  const onSubmit = (data: { [key: string]: any }) => {
    console.log(data);
    navigate("/projects");
  };

  return (
    <div className={styles.Card}>
      <Form onSubmit={onSubmit}>
        <Field label="Name">
          <Input type="text" required />
        </Field>

        <Field label="Email">
          <Input type="email" required />
        </Field>

        <Field label="Password">
          <Input type="password" required />
        </Field>

        <Field label="Password Confirmation">
          <Input type="password" required />
        </Field>

        <Button className={styles.Button} type="submit">
          Register
        </Button>
      </Form>
      <br />
      <small>
        Already have an account? <br />
        Login <Link to="/login">here</Link>.
      </small>
    </div>
  );
};

export default Register;
