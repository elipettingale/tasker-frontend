import { FunctionComponent } from "react";
import { Droppable } from "react-beautiful-dnd";
import { BEM } from "../../../../functions/helpers";
import Badge from "../../../Badge/Badge";
import Task, { TaskType } from "../Task/Task";
import styles from "./Column.module.css";

interface ColumnProps {
  column: ColumnType;
}

export type ColumnType = {
  id: string;
  name: string;
  color: `#${string}`;
  tasks: TaskType[];
};

const Column: FunctionComponent<ColumnProps> = ({
  column: { id, name, color, tasks },
}) => {
  return (
    <div>
      <div className={styles.Header}>
        <span className={styles.Name}>
          {name} <Badge color={color}>{tasks.length}</Badge>
        </span>
        <span
          className={styles.Underline}
          style={{ borderColor: color }}
        ></span>
      </div>
      <div className={styles.Content}>
        <Droppable droppableId={id}>
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              className={BEM(styles, "Column", {
                isDraggingOver: snapshot.isDraggingOver,
              })}
            >
              {tasks.map((task, index) => (
                <Task key={task.id} index={index} task={task} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

// todo: merge List.tsx into column
// todo: deke

export default Column;
