import { FunctionComponent, ReactNode } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Guest.module.css";

interface GuestProps {}

const Guest: FunctionComponent<GuestProps> = () => {
  return (
    <div className={styles.Guest}>
      <Outlet />
    </div>
  );
};

export default Guest;
