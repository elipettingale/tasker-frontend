export type ProjectType = {
  _id: string;
  name: string;
  lists: ListsType;
  listTasks: ListTasksType;
};

export type ListTasksType = {
  [key: string]: string[];
};

export type ListsType = {
  [key: string]: ListType;
};

export type ListType = {
  name: string;
  color: `#${string}`;
};

export type TaskType = {
  id: string;
  title: string;
  description: string;
  tags: string[];
};
