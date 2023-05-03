import { useContext } from 'react';
import clsx from 'clsx';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { StateContext, DispatchContext } from '../context';
import MainIcon from './MainIcon';
import Task from './Task';
import Button from './Button';
import CreateTask from './CreateTask';
import fetchTasks from '../utils/fetchTasks';
import { IconChevronRight } from '@tabler/icons-react';

function Main() {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  const label =
    state.lists.find((list) => list.id === state.selected)?.label ??
    state.selected;

  const tasks = fetchTasks(state);
  const todo = tasks.filter((task) => !task.completed);
  const done = tasks.filter((task) => task.completed);

  const showBanner =
    Boolean(!tasks.length) &&
    (state.selected === 'Upcoming' || state.selected === 'Pinned');

  return (
    <div className='flex w-[calc(1280px-20rem)] flex-col bg-white pb-8 pt-16'>
      <h1 className='mx-16 mb-8 flex shrink-0 truncate text-xl'>
        <MainIcon selected={state.selected} />
        <span className='truncate'>{label}</span>
      </h1>

      {state.selected !== 'Upcoming' && state.selected !== 'Pinned' && (
        <CreateTask />
      )}

      {showBanner && (
        <div className='mx-12 flex h-10 items-center rounded-lg bg-stone-200/50 px-6 text-lg text-stone-500 ring-1 ring-inset ring-stone-200'>
          {state.selected} tasks will appear here
        </div>
      )}

      <OverlayScrollbarsComponent
        options={{
          scrollbars: {
            autoHide: 'never',
            theme: 'os-custom-theme',
          },
        }}
        defer
      >
        <ul>
          {todo
            .filter((task) => task.pinned)
            .map((task) => (
              <Task key={task.id} task={task} />
            ))}
          {todo
            .filter((task) => !task.pinned)
            .map((task) => (
              <Task key={task.id} task={task} />
            ))}
        </ul>
        {Boolean(done.length) && (
          <Button
            onClick={() =>
              dispatch({
                type: 'collapse-completed',
                payload: !state.collapseCompleted,
              })
            }
            className={clsx(
              'mb-1 ml-12 w-fit text-stone-400 hover:bg-stone-200/75 hover:text-stone-600',
              Boolean(todo.length) && 'mt-4'
            )}
          >
            <IconChevronRight
              className={clsx(
                !state.collapseCompleted && 'rotate-90',
                'mr-2 stroke-[1.5] text-stone-400 transition-[transform]'
              )}
            />
            Completed
            <span className='mx-2 text-base text-stone-400'>
              ({done.length})
            </span>
          </Button>
        )}
        {!state.collapseCompleted && (
          <ul>
            {done.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </ul>
        )}
      </OverlayScrollbarsComponent>
    </div>
  );
}

export default Main;
