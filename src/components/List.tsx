import { useState } from 'react';
import ListInput from './ListInput';
import ListButton from './ListButton';
import ListOptions from './ListOptions';
import ListModal from './ListModal';
import useList from '../hooks/useList';
import { IconList } from '@tabler/icons-react';
import type { ListType } from '../context/types';

type Props = {
  list: ListType;
};

function List({ list }: Props) {
  const [edit, setEdit] = useState(false);
  const [modal, setModal] = useState(false);
  const { updateList, deleteList, selected } = useList(list.id);

  return (
    <li className='relative mx-4 mb-1 flex'>
      {edit ? (
        <ListInput
          name={list.label}
          cancel={() => setEdit(false)}
          callback={(input: string) => updateList({ ...list, label: input })}
        />
      ) : (
        <ListButton className='w-full' id={list.id}>
          <IconList className='flex-shrink-0' />
          <span className='truncate'>{list.label}</span>
        </ListButton>
      )}

      <ListOptions
        show={!edit && Boolean(selected)}
        onRename={() => setEdit(true)}
        onDelete={() => setModal(true)}
      />

      <ListModal
        isOpen={modal}
        setIsOpen={setModal}
        callback={() => deleteList(list.id)}
      />
    </li>
  );
}

export default List;
