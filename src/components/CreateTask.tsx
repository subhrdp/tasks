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
    <div className={clsx('mx-8 mb-8 shrink-0 xl:mx-32', create && 'relative')}>
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
          className='w-full border border-neutral-300/75 bg-neutral-200/50 text-neutral-500 hover:bg-neutral-200 hover:text-neutral-600'
        >
          <IconPlus className='mr-2 stroke-[1.25] text-neutral-400' />
          Create Task
        </Button>
      )}
    </div>
  );
}

export default CreateTask;
