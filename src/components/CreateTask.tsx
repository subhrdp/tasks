import { useState, useContext } from 'react';
import clsx from 'clsx';
import { StateContext, DispatchContext } from '../context';
import Input from './Input';
import Button from './Button';
import createId from '../utils/createId';
import { IconPlus } from '@tabler/icons-react';

function CreateTask() {
  const [create, setCreate] = useState(false);
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);

  return (
    <div className={clsx('mx-12 mb-8 shrink-0', create && 'relative')}>
      {create ? (
        <Input
          name=''
          cancel={() => setCreate(false)}
          callback={(input) =>
            dispatch({
              type: 'add-task',
              payload: {
                id: createId(),
                label: input,
                completed: false,
                pinned: false,
                date: null,
                list: state.selected,
              },
            })
          }
        />
      ) : (
        <Button
          onClick={() => setCreate(true)}
          className='w-full bg-stone-200/50 ring-1 ring-inset ring-stone-200 hover:ring-stone-300'
        >
          <IconPlus className='mr-2 stroke-[1.25] text-stone-400' />
          Create Task
        </Button>
      )}
    </div>
  );
}

export default CreateTask;
