import { FunctionComponent } from "react";
import { Draggable } from "react-beautiful-dnd";
import { BEM } from "../../../../includes/helpers";
import Badge from "../../../Badge/Badge";
import styles from "./Task.module.css";

interface TaskProps {
  index: number;
  task: TaskType;
}

export type TaskType = {
  id: string;
  title: string;
  description: string;
  tags: string[];
};

const Task: FunctionComponent<TaskProps> = ({
  index,
  task: { id, title, description, tags },
}) => {
  return (
    <Draggable key={id} draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div>
          <div
            className={BEM(styles, "Task", {
              isDragging: snapshot.isDragging,
            })}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={provided.draggableProps.style}
          >
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
        </div>
      )}
    </Draggable>
  );
};

export default Task;
