import { FunctionComponent, useState } from "react";
import Button from "../../components/Button/Button";
import Form from "../../components/Form/Form";
import Input from "../../components/Form/components/Input/Input";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import api from "../../includes/api";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    await api.get("/sanctum/csrf-cookie");

    api
      .post("/api/session", formData)
      .then(() => {
        navigate("/");
      })
      .catch(({ response }) => {
        if (response.status === 422) {
          console.error("422 (Unprocessable Content)", response.data.errors);
          setErrors(response.data.errors);
        }

        if (response.status === 403) {
          console.error("403 (Forbidden)", response.data);
        }

        setIsSubmitting(false);
      });
  };

  return (
    <div className={styles.Card}>
      <Form onSubmit={onSubmit} disabled={isSubmitting} errors={errors}>
        <Input label="Email" name="email" type="email" />
        <Input label="Password" name="password" type="password" />

        <Button className={styles.Button} type="submit">
          Login
        </Button>
      </Form>

      <div className={styles.Subtext}>
        Don't have an account? <br />
        Register <Link to="/register">here</Link>.
      </div>
    </div>
  );
};

export default Login;
