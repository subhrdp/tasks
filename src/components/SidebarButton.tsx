import React, { useContext } from 'react';
import clsx from 'clsx';
import { StateContext, DispatchContext } from '../context';
import Button from './Button';
import listCount from '../utils/listCount';

type Props = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

function SidebarButton({ id, children, className }: Props) {
  const state = useContext(StateContext);
  const dispatch = useContext(DispatchContext);
  const count = listCount(id, state);

  return (
    <Button
      onClick={() => dispatch({ type: 'change-list', payload: id })}
      className={clsx(
        'text-neutral-500 hover:bg-neutral-200 hover:text-neutral-600 [&>svg]:mr-2 [&>svg]:stroke-[1.25] [&>svg]:text-neutral-400',
        state.selected === id && 'bg-neutral-200 text-neutral-600',
        className
      )}
    >
      {children}
      {Boolean(count) && (
        <span className='mr-2 text-base text-neutral-400'>({count})</span>
      )}
    </Button>
  );
}

export default SidebarButton;
