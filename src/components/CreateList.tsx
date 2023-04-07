import { useState } from 'react';
import ListInput from './ListInput';
import useList from '../hooks/useList';
import { IconPlus } from '@tabler/icons-react';

function CreateList() {
  const [createList, setCreateList] = useState(false);
  const { addList } = useList();

  return (
    <div className='flex-shink-0 relative mx-4 mb-4 mt-4 flex'>
      {createList ? (
        <ListInput cancel={() => setCreateList(false)} callback={addList} />
      ) : (
        <button
          onClick={() => setCreateList(true)}
          className='flex h-9 w-full items-center rounded-lg px-4 text-lg text-gray-600 ring-2 ring-gray-200 hover:bg-gray-200'
        >
          <IconPlus className='mr-2 stroke-[1.25] text-gray-400' />
          Create List
        </button>
      )}
    </div>
  );
}

export default CreateList;
