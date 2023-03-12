import { FunctionComponent } from "react";
import Button from "../../components/Button/Button";
import Field from "../../components/Form/components/Field/Field";
import Form from "../../components/Form/Form";
import Input from "../../components/Form/components/Input/Input";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const navigate = useNavigate();

  const onSubmit = (data: { [key: string]: any }) => {
    console.log(data);
    navigate("/projects");
  };

  return (
    <div className={styles.Card}>
      <Form onSubmit={onSubmit}>
        <Field label="Email">
          <Input name="email" type="email" required />
        </Field>

        <Field label="Password">
          <Input name="password" type="password" required />
        </Field>

        <Button className={styles.Button} type="submit">
          Login
        </Button>
      </Form>
      <br />
      <small>
        Don't have an account? <br />
        Register <Link to="/register">here</Link>.
      </small>
    </div>
  );
};

export default Login;
