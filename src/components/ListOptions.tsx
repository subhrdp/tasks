import React, { useState, useRef } from 'react';
import { Menu, MenuHeader, MenuItem } from './Menu';
import Tooltip from './Tooltip';
import { IconDots } from '@tabler/icons-react';

type Props = {
  show: boolean;
  onRename: () => void;
  onDelete: () => void;
};

function ListOptions({ show, onRename, onDelete }: Props) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      {show && (
        <Tooltip message='List Options' buttonRef={buttonRef}>
          {(attrs: React.HTMLAttributes<HTMLButtonElement>) => (
            <button
              {...attrs}
              onClick={() => setMenuIsOpen((prevState) => !prevState)}
              className='absolute right-4 top-0 h-9 text-gray-600 transition hover:scale-125'
            >
              <IconDots className='stroke-[1.25]' />
            </button>
          )}
        </Tooltip>
      )}

      <Menu
        isOpen={menuIsOpen}
        setIsOpen={setMenuIsOpen}
        reference={buttonRef.current}
      >
        <MenuHeader>List Options</MenuHeader>
        <MenuItem
          onClick={() => {
            setMenuIsOpen(false);
            onRename();
          }}
        >
          Rename List
        </MenuItem>
        <MenuItem
          onClick={() => {
            setMenuIsOpen(false);
            onDelete();
          }}
        >
          Delete List
        </MenuItem>
      </Menu>
    </>
  );
}

export default ListOptions;
