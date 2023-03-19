import { FunctionComponent, useState } from "react";
import List from "./components/List/List";
import {
  DragDropContext,
  DraggableLocation,
  DropResult,
} from "react-beautiful-dnd";
import styles from "./Kanban.module.css";
import { ListsType, TasksType } from "../../includes/types";

interface KanbanProps {
  lists: ListsType;
  tasks: TasksType;
  setTasks: (tasks: TasksType) => void;
}

const Kanban: FunctionComponent<KanbanProps> = ({ lists, tasks, setTasks }) => {
  const moveWithinList = (
    source: DraggableLocation,
    destination: DraggableLocation
  ) => {
    let clone = [...tasks[source.droppableId]];
    const [removedItem] = clone.splice(source.index, 1);
    clone.splice(destination.index, 0, removedItem);

    setTasks({ ...tasks, [source.droppableId]: clone });
  };

  const moveToAnotherList = (
    source: DraggableLocation,
    destination: DraggableLocation
  ) => {
    const sourceClone = [...tasks[source.droppableId]];
    const destinationClone = [...tasks[destination.droppableId]];

    const [removedItem] = sourceClone.splice(source.index, 1);
    destinationClone.splice(destination.index, 0, removedItem);

    setTasks({
      ...tasks,
      [source.droppableId]: sourceClone,
      [destination.droppableId]: destinationClone,
    });
  };

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      moveWithinList(source, destination);
    } else {
      moveToAnotherList(source, destination);
    }
  };

  return (
    <div>
      <div className={styles.Lists}>
        <DragDropContext onDragEnd={onDragEnd}>
          {Object.entries(lists).map(([_id, list]) => {
            return (
              <List key={_id} id={_id} list={list} tasks={tasks[_id] ?? []} />
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
};

export default Kanban;
