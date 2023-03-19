export type ProjectType = {
  _id: string;
  name: string;
  lists: ListsType;
  tasks: TasksType;
};

export type ListsType = {
  [key: string]: ListType;
};

export type ListType = {
  name: string;
  color: `#${string}`;
};

export type TasksType = {
  [key: string]: TaskType[];
};

export type TaskType = {
  id: string;
  title: string;
  description: string;
};
