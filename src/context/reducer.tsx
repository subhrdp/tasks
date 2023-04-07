import type { StateType, ActionType } from './types';

function reducer(prevState: StateType, action: ActionType): StateType {
  switch (action.type) {
    case 'add-list':
      return {
        ...prevState,
        lists: [...prevState.lists, action.payload].sort((a, b) =>
          a.label.localeCompare(b.label)
        ),
        selected: action.payload.id,
      };

    case 'update-list':
      return {
        ...prevState,
        lists: [
          ...prevState.lists.filter((list) => list.id !== action.payload.id),
          action.payload,
        ].sort((a, b) => a.label.localeCompare(b.label)),
      };

    case 'delete-list':
      return {
        lists: prevState.lists.filter((list) => list.id !== action.payload),
        tasks: prevState.tasks.filter((task) => task.list !== action.payload),
        selected: 'inbox',
      };

    case 'add-task':
      return { ...prevState, tasks: [...prevState.tasks, action.payload] };

    case 'update-task':
      return {
        ...prevState,
        tasks: [
          action.payload,
          ...prevState.tasks.filter((task) => task.id !== action.payload.id),
        ],
      };

    case 'update-task-time':
      return {
        ...prevState,
        tasks: prevState.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };

    case 'delete-task':
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== action.payload),
      };

    case 'change-selected-list':
      return {
        ...prevState,
        selected: action.payload,
      };

    default:
      return prevState;
  }
}

export default reducer;
