import { StateType } from '../context/types';

function getCount(id: string, state: StateType) {
  const incomplete = state.tasks.filter((task) => !task.completed);

  if (id === 'upcoming') {
    return incomplete.filter((task) => Boolean(task.date)).length;
  }

  if (id === 'pinned') {
    return incomplete.filter((task) => task.pinned).length;
  }

  return incomplete.filter((task) => task.list === id).length;
}

export default getCount;
