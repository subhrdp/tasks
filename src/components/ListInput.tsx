import { useState, useEffect } from 'react';
import { IconList } from '@tabler/icons-react';

type Props = {
  cancel: () => void;
  name?: string;
  callback: (input: string) => void;
};

function ListInput({ cancel, name, callback }: Props) {
  const [value, setValue] = useState(name ?? 'New List');

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      cancel();
    }

    if (event.key === 'Enter') {
      if (value.replace(/\s/g, '').length) {
        callback(value);
        cancel();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => document.removeEventListener('keydown', handleKeydown);
  });

  return (
    <>
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={(e) => {
          if (!name) {
            e.target.select();
          }
        }}
        onBlur={cancel}
        autoFocus // eslint-disable-line
        className='h-9 w-full rounded-lg bg-gray-100 pl-12 pr-4 text-lg text-gray-600 outline-none ring-2 ring-blue-400'
      />
      <IconList className='absolute left-4 top-1.5 h-6 w-6 stroke-[1.25] text-gray-400' />
    </>
  );
}

export default ListInput;
