import { FunctionComponent, useState } from "react";
import Form from "../../components/Form/Form";
import Input from "../../components/Form/components/Input/Input";
import Button from "../../components/Button/Button";
import styles from "./Register.module.css";
import api from "../../includes/api";
import { Link, useNavigate } from "react-router-dom";

interface RegisterProps {}

const Register: FunctionComponent<RegisterProps> = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (formData: { [key: string]: any }) => {
    setIsSubmitting(true);
    await api.get("/sanctum/csrf-cookie");

    api
      .post("/api/registration", formData)
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
        <Input label="Name" name="name" type="text" required />
        <Input label="Email" name="email" type="email" required />
        <Input label="Password" name="password" type="password" required />
        <Input
          label="Confirm Password"
          name="password_confirmation"
          type="password"
          required
        />

        <Button className={styles.Button} type="submit">
          Register
        </Button>
      </Form>
      <div className={styles.Subtext}>
        Don't have an account? <br />
        Register <Link to="/register">here</Link>.
      </div>
    </div>
  );
};

export default Register;
