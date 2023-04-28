export type ListType = {
  id: string;
  label: string;
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
  collapseCompleted: boolean;
};

export type ActionType =
  | { type: 'add-list'; payload: ListType }
  | { type: 'update-list'; payload: ListType }
  | { type: 'change-list'; payload: string }
  | { type: 'delete-list'; payload: string }
  | { type: 'add-task'; payload: TaskType }
  | { type: 'update-task'; payload: TaskType }
  | { type: 'toggle-task'; payload: TaskType }
  | { type: 'delete-task'; payload: string }
  | { type: 'collapse-completed'; payload: boolean };
