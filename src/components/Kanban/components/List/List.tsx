import { FunctionComponent } from "react";
import { Droppable } from "react-beautiful-dnd";
import { BEM } from "../../../../includes/helpers";
import { ListType, TaskType } from "../../../../includes/types";
import Badge from "../../../Badge/Badge";
import Task from "../Task/Task";
import styles from "./List.module.css";

interface ListProps {
  id: string;
  list: ListType;
  tasks: string[];
}

const List: FunctionComponent<ListProps> = ({
  id,
  list: { name, color },
  tasks,
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
              {tasks.map((id, index) => (
                <Task key={id} id={id} index={index} />
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
