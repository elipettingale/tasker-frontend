import { FunctionComponent, useState } from "react";
import Button from "../Button/Button";
import List, { ListType } from "./components/List/List";
import {
  DragDropContext,
  DraggableLocation,
  DropResult,
} from "react-beautiful-dnd";
import styles from "./Kanban.module.css";
import { clone } from "../../includes/helpers";
import Icon from "../Icon/Icon";

interface KanbanProps {}

type ListsType = {
  [key: string]: ListType;
};

const initial: ListsType = {
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
  const [lists, setLists] = useState(initial);

  const moveWithinList = (
    source: DraggableLocation,
    destination: DraggableLocation
  ) => {
    let listClone = clone(lists[source.droppableId]);
    const [removedItem] = listClone.tasks.splice(source.index, 1);
    listClone.tasks.splice(destination.index, 0, removedItem);

    setLists((previous) => {
      return { ...previous, [source.droppableId]: listClone };
    });
  };

  const moveToAnotherList = (
    source: DraggableLocation,
    destination: DraggableLocation
  ) => {
    const sourceListClone = clone(lists[source.droppableId]);
    const destinationListClone = clone(lists[destination.droppableId]);

    const [removedItem] = sourceListClone.tasks.splice(source.index, 1);
    destinationListClone.tasks.splice(destination.index, 0, removedItem);

    setLists((previous) => {
      return {
        ...previous,
        [source.droppableId]: sourceListClone,
        [destination.droppableId]: destinationListClone,
      };
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
      <div className={styles.Toolbar}>
        <Button>
          New Task <Icon name="plus" />
        </Button>
      </div>
      <div className={styles.Lists}>
        <DragDropContext onDragEnd={onDragEnd}>
          <List list={lists["1"]} />
          <List list={lists["2"]} />
          <List list={lists["3"]} />
          <List list={lists["4"]} />
        </DragDropContext>
      </div>
    </div>
  );
};

export default Kanban;
