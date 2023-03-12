import { FunctionComponent, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Auth.module.css";

interface AuthProps {}

const Auth: FunctionComponent<AuthProps> = () => {
  return (
    <div className={styles.Auth}>
      <Outlet />
    </div>
  );
};

export default Auth;
