import { useState, useContext } from 'react';
import clsx from 'clsx';
import { DispatchContext } from '../context';
import Input from './Input';
import Button from './Button';
import createId from '../utils/createId';
import { IconPlus } from '@tabler/icons-react';

function CreateList() {
  const [create, setCreate] = useState(false);
  const dispatch = useContext(DispatchContext);

  return (
    <div className={clsx('mx-4 mb-4 mt-4 shrink-0', create && 'relative')}>
      {create ? (
        <Input
          name='New List'
          cancel={() => setCreate(false)}
          callback={(input) => {
            setCreate(false);
            dispatch({
              type: 'add-list',
              payload: {
                id: createId(),
                label: input,
              },
            });
          }}
        />
      ) : (
        <Button
          onClick={() => setCreate(true)}
          className='w-full bg-stone-200/50 ring-1 ring-inset ring-stone-200 hover:ring-stone-300'
        >
          <IconPlus className='mr-2 stroke-[1.25] text-stone-400' />
          Create List
        </Button>
      )}
    </div>
  );
}

export default CreateList;
