import { FunctionComponent } from "react";
import Badge from "../../../Badge/Badge";
import styles from "./Task.module.css";

interface TaskProps {
  task: TaskType;
}

export type TaskType = {
  id: number;
  title: string;
  description: string;
  tags: string[];
};

const Task: FunctionComponent<TaskProps> = ({
  task: { title, description, tags },
}) => {
  return (
    <div className={styles.Task}>
      {tags.length > 0 ? (
        <div className={styles.Badges}>
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      ) : null}
      <h3 className={styles.Title}>{title}</h3>
      <p className={styles.Description}>{description}</p>
    </div>
  );
};

export default Task;
