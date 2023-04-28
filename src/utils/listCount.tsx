import type { StateType } from '../context/types';

function listCount(id: string, state: StateType) {
  const todo = state.tasks.filter((task) => !task.completed);

  if (id === 'Upcoming') {
    return todo.filter((task) => task.date).length;
  }

  if (id === 'Pinned') {
    return todo.filter((task) => task.pinned).length;
  }

  return todo.filter((task) => task.list === id).length;
}

export default listCount;
