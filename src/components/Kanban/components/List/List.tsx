import { FunctionComponent } from "react";
import { Droppable } from "react-beautiful-dnd";
import { BEM } from "../../../../includes/helpers";
import Badge from "../../../Badge/Badge";
import Task, { TaskType } from "../Task/Task";
import styles from "./List.module.css";

interface ListProps {
  list: ListType;
}

export type ListType = {
  id: string;
  name: string;
  color: `#${string}`;
  tasks: TaskType[];
};

const List: FunctionComponent<ListProps> = ({
  list: { id, name, color, tasks },
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
              className={BEM(styles, "List", {
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

export default List;
