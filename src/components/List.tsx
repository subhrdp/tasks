import { useState, useRef, useContext } from 'react';
import clsx from 'clsx';
import { DispatchContext } from '../context';
import Input from './Input';
import SidebarButton from './SidebarButton';
import IconButton from './IconButton';
import ListMenu from './ListMenu';
import ListModal from './ListModal';
import { IconList, IconDots } from '@tabler/icons-react';
import type { ListType } from '../context/types';

type Props = {
  list: ListType;
};

function List({ list }: Props) {
  const [edit, setEdit] = useState(false);
  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  const dispatch = useContext(DispatchContext);

  return (
    <li
      className={clsx(
        'group mx-4 mb-1 flex items-center rounded-lg hover:bg-neutral-200',
        edit && 'relative'
      )}
    >
      {edit ? (
        <Input
          name={list.label}
          cancel={() => setEdit(false)}
          callback={(input) => {
            setEdit(false);
            dispatch({
              type: 'update-list',
              payload: { ...list, label: input },
            });
          }}
        />
      ) : (
        <>
          <SidebarButton id={list.id} className='peer w-full pr-10'>
            <IconList className='flex-shrink-0' />
            <span className='mr-2 truncate'>{list.label}</span>
          </SidebarButton>
          <IconButton
            ref={menuRef}
            label='List Options'
            onClick={() => setMenu((prevState) => !prevState)}
            className='-ml-10 opacity-0 focus-visible:opacity-100 group-hover:opacity-100 peer-focus-visible:opacity-100'
          >
            <IconDots />
          </IconButton>
        </>
      )}

      <ListMenu
        reference={menuRef.current}
        isOpen={menu}
        setIsOpen={setMenu}
        onRename={() => setEdit(true)}
        onDelete={() => setModal(true)}
      />

      <ListModal
        isOpen={modal}
        setIsOpen={setModal}
        callback={() => dispatch({ type: 'delete-list', payload: list.id })}
      />
    </li>
  );
}

export default List;
