import {
  FunctionComponent,
  ReactNode,
  Children,
  cloneElement,
  ReactElement,
} from "react";
import { Link } from "react-router-dom";
import Icon from "../Icon/Icon";
import styles from "./Breadcrumbs.module.css";

interface BreadcrumbsProps {
  children: ReactNode;
}

const Breadcrumbs: FunctionComponent<BreadcrumbsProps> = ({ children }) => {
  const breadcrumbs = Children.toArray(children) as ReactElement[];

  return (
    <nav className={styles.Breadcrumbs}>
      {Children.map(breadcrumbs, (child: ReactElement, index) => {
        const isLastBreadcrumb = index === breadcrumbs.length - 1;
        if (isLastBreadcrumb)
          return cloneElement(child, { className: styles.Breadcrumb });

        return (
          <>
            {cloneElement(child, { className: styles.Breadcrumb })}
            <Icon name="chevron-right" />
          </>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
