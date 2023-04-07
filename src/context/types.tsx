export type ListType = {
  id: string;
  label: string;
  collapseCompleted: boolean;
};

export type TaskType = {
  id: string;
  label: string;
  completed: boolean;
  pinned: boolean;
  date: string | null;
  list: string;
};

export type StateType = {
  lists: ListType[];
  tasks: TaskType[];
  selected: string;
};

export type ActionType =
  | { type: 'add-list'; payload: ListType }
  | { type: 'update-list'; payload: ListType }
  | { type: 'delete-list'; payload: string }
  | { type: 'add-task'; payload: TaskType }
  | { type: 'update-task'; payload: TaskType }
  | { type: 'update-task-time'; payload: TaskType }
  | { type: 'delete-task'; payload: string }
  | { type: 'change-selected-list'; payload: string };
