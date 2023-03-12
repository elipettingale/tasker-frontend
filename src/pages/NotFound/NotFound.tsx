import { FunctionComponent } from "react";
import styles from "./NotFound.module.css";

interface NotFoundProps {}

const NotFound: FunctionComponent<NotFoundProps> = () => {
  return (
    <div className={styles.NotFound}>
      <h1 className={styles.Title}>404</h1>
      <h2 className={styles.Description}>
        We couldn't find the page you were looking for.
      </h2>
    </div>
  );
};

export default NotFound;
