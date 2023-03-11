import { FunctionComponent, useState } from "react";
import Button from "../Button/Button";
import Column, { ColumnType } from "./components/Column/Column";
import {
  DragDropContext,
  DraggableLocation,
  DropResult,
} from "react-beautiful-dnd";
import styles from "./Kanban.module.css";
import { clone } from "../../functions/helpers";

interface KanbanProps {}

type ColumnsType = {
  [key: string]: ColumnType;
};

const initial: ColumnsType = {
  "1": {
    id: "1",
    name: "Todo",
    color: "#f39b13",
    tasks: [
      {
        id: "1",
        title: "Lorem ipsum dolor",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        tags: ["One", "Two"],
      },
      {
        id: "2",
        title: "Sed do eiusmod",
        description:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        tags: ["Two"],
      },
    ],
  },
  "2": { id: "2", name: "In Progress", color: "#735bc7", tasks: [] },
  "3": {
    id: "3",
    name: "Testing",
    color: "#d04a4a",
    tasks: [
      {
        id: "3",
        title: "Ut enim ad",
        description:
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
        tags: ["Three"],
      },
    ],
  },
  "4": {
    id: "4",
    name: "Done",
    color: "#59c78f",
    tasks: [
      {
        id: "4",
        title: "Nisi ut aliquip",
        description: "Nisi ut aliquip ex ea commodo consequat",
        tags: [],
      },
    ],
  },
};

const Kanban: FunctionComponent<KanbanProps> = () => {
  const [columns, setColumns] = useState(initial);

  const moveWithinColumn = (
    source: DraggableLocation,
    destination: DraggableLocation
  ) => {
    let columnClone = clone(columns[source.droppableId]);
    const [removedItem] = columnClone.tasks.splice(source.index, 1);
    columnClone.tasks.splice(destination.index, 0, removedItem);

    setColumns((previous) => {
      return { ...previous, [source.droppableId]: columnClone };
    });
  };

  const moveToAnotherColumn = (
    source: DraggableLocation,
    destination: DraggableLocation
  ) => {
    const sourceColumnClone = clone(columns[source.droppableId]);
    const destinationColumnClone = clone(columns[destination.droppableId]);

    const [removedItem] = sourceColumnClone.tasks.splice(source.index, 1);
    destinationColumnClone.tasks.splice(destination.index, 0, removedItem);

    setColumns((previous) => {
      return {
        ...previous,
        [source.droppableId]: sourceColumnClone,
        [destination.droppableId]: destinationColumnClone,
      };
    });
  };

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      moveWithinColumn(source, destination);
    } else {
      moveToAnotherColumn(source, destination);
    }
  };

  return (
    <div>
      <div className={styles.Toolbar}>
        <Button>New Task</Button>
      </div>
      <div className={styles.Columns}>
        <DragDropContext onDragEnd={onDragEnd}>
          <Column column={columns["1"]} />
          <Column column={columns["2"]} />
          <Column column={columns["3"]} />
          <Column column={columns["4"]} />
        </DragDropContext>
      </div>
    </div>
  );
};

export default Kanban;
