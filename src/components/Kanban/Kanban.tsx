import { FunctionComponent } from "react";
import Button from "../Button/Button";
import Column from "./components/Column/Column";
import Task, { TaskType } from "./components/Task/Task";
import styles from "./Kanban.module.css";

interface KanbanProps {}

type ColumnType = {
  id: number;
  name: string;
  color: `#${string}`;
  tasks: TaskType[];
};

const Kanban: FunctionComponent<KanbanProps> = () => {
  const columns: ColumnType[] = [
    {
      id: 1,
      name: "Todo",
      color: "#f39b13",
      tasks: [
        {
          id: 1,
          title: "Lorem ipsum dolor",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          tags: ["One", "Two"],
        },
        {
          id: 2,
          title: "Sed do eiusmod",
          description:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          tags: ["Two"],
        },
      ],
    },
    { id: 2, name: "In Progress", color: "#735bc7", tasks: [] },
    {
      id: 3,
      name: "Testing",
      color: "#d04a4a",
      tasks: [
        {
          id: 3,
          title: "Ut enim ad",
          description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
          tags: ["Three"],
        },
      ],
    },
    {
      id: 4,
      name: "Done",
      color: "#59c78f",
      tasks: [
        {
          id: 4,
          title: "Nisi ut aliquip",
          description: "Nisi ut aliquip ex ea commodo consequat",
          tags: [],
        },
      ],
    },
  ];
  return (
    <div>
      <div className={styles.Toolbar}>
        <Button>New Task</Button>
      </div>
      <div className={styles.Columns}>
        {columns.map(({ id, name, color, tasks }) => (
          <Column key={id} name={name} color={color} total={tasks.length}>
            {tasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </Column>
        ))}
      </div>
    </div>
  );
};

export default Kanban;
