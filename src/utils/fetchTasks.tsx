import type { StateType } from '../context/types';

function fetchTasks(state: StateType) {
  const selected = state.selected;
  const tasks = state.tasks;

  if (selected === 'Upcoming') {
    return tasks.filter((task) => task.date);
  }

  if (selected === 'Pinned') {
    return tasks.filter((task) => task.pinned && !task.completed);
  }

  return tasks.filter((task) => task.list === selected);
}

export default fetchTasks;
