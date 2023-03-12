import { FunctionComponent, ReactNode } from "react";
import styles from "./Breadcrumb.module.css";

interface BreadcrumbProps {
  children: ReactNode;
}

const Breadcrumb: FunctionComponent<BreadcrumbProps> = ({ children }) => {
  return <div className={styles.Breadcrumb}>{children}</div>;
};

export default Breadcrumb;
