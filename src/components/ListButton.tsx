import React from 'react';
import clsx from 'clsx';
import useList from '../hooks/useList';

type Props = {
  id: string;
  children: React.ReactNode;
  className?: string;
};

function ListButton({ id, children, className }: Props) {
  const { selected, handleClick, listCount } = useList(id);

  return (
    <button
      onClick={handleClick}
      className={clsx(
        'flex h-9 flex-shrink-0 items-center rounded-lg px-4 text-lg text-gray-600 [&>svg]:mr-2 [&>svg]:stroke-[1.25] [&>svg]:text-gray-400',
        selected ? 'bg-gray-200 pr-12' : 'hover:bg-gray-200',
        className
      )}
    >
      {children}
      {Boolean(listCount) && (
        <span className='ml-2 text-base text-gray-400'>({listCount})</span>
      )}
    </button>
  );
}

export default ListButton;
