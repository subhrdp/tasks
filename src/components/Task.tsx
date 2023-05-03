import { useContext } from 'react';
import clsx from 'clsx';
import { DispatchContext } from '../context';
import IconButton from './IconButton';
import Checkbox from './Checkbox';
import Date from './Date';
import { IconPinnedFilled, IconPinned, IconTrash } from '@tabler/icons-react';
import type { TaskType } from '../context/types';

type Props = {
  task: TaskType;
};

function Task({ task }: Props) {
  const dispatch = useContext(DispatchContext);

  const date = (
    <Date
      date={task.date}
      onChange={(input) =>
        dispatch({
          type: 'update-task',
          payload: {
            ...task,
            date: input ? input.toString() : null,
          },
        })
      }
    />
  );

  return (
    <ul className='group mx-8 mb-1 flex h-10 flex-shrink-0 items-center rounded-lg px-3 text-lg hover:bg-stone-200/75 xl:mx-32'>
      <Checkbox
        checked={task.completed}
        handleClick={() =>
          dispatch({
            type: 'toggle-task',
            payload: { ...task, completed: !task.completed },
          })
        }
      />
      <span
        className={clsx(
          'mx-2 truncate',
          task.completed &&
            'text-stone-400 line-through group-hover:text-stone-600 group-hover:no-underline'
        )}
      >
        {task.label}
      </span>
      {task.date && date}
      {!task.completed && (
        <>
          <IconButton
            label={task.pinned ? 'Unpin' : 'Pin'}
            onClick={() =>
              dispatch({
                type: 'update-task',
                payload: {
                  ...task,
                  pinned: !task.pinned,
                },
              })
            }
            className={clsx(
              task.pinned
                ? 'mr-auto !text-blue-500'
                : 'ml-auto opacity-0 focus-visible:opacity-100 group-hover:opacity-100'
            )}
          >
            {task.pinned ? <IconPinnedFilled /> : <IconPinned />}
          </IconButton>
          {!task.date && date}
        </>
      )}
      <IconButton
        label='Delete'
        onClick={() => dispatch({ type: 'delete-task', payload: task.id })}
        className={clsx(
          task.completed ? 'ml-auto' : 'ml-1',
          'opacity-0 focus-visible:opacity-100 group-hover:opacity-100'
        )}
      >
        <IconTrash />
      </IconButton>
    </ul>
  );
}

export default Task;
