import { FunctionComponent, useState } from "react";
import List from "./components/List/List";
import {
  DragDropContext,
  DraggableLocation,
  DropResult,
} from "react-beautiful-dnd";
import styles from "./Kanban.module.css";
import { clone } from "../../includes/helpers";
import { ListsType, ListTasksType } from "../../includes/types";

interface KanbanProps {
  lists: ListsType;
  listTasks: ListTasksType;
  setListTasks: (listTasks: ListTasksType) => void;
}

const Kanban: FunctionComponent<KanbanProps> = ({
  lists,
  listTasks,
  setListTasks,
}) => {
  const moveWithinList = (
    source: DraggableLocation,
    destination: DraggableLocation
  ) => {
    let listClone = [...listTasks[source.droppableId]];
    const [removedItem] = listClone.splice(source.index, 1);
    listClone.splice(destination.index, 0, removedItem);

    setListTasks({ ...listTasks, [source.droppableId]: listClone });
  };

  const moveToAnotherList = (
    source: DraggableLocation,
    destination: DraggableLocation
  ) => {
    const sourceListClone = [...listTasks[source.droppableId]];
    const destinationListClone = [...listTasks[destination.droppableId]];

    const [removedItem] = sourceListClone.splice(source.index, 1);
    destinationListClone.splice(destination.index, 0, removedItem);

    setListTasks({
      ...listTasks,
      [source.droppableId]: sourceListClone,
      [destination.droppableId]: destinationListClone,
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
              <List
                key={_id}
                id={_id}
                list={list}
                tasks={listTasks[_id] ?? []}
              />
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
};

export default Kanban;
