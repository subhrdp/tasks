import { useState, useEffect } from 'react';
import { IconPencilMinus } from '@tabler/icons-react';

type Props = {
  cancel: () => void;
  name: string;
  callback: (input: string) => void;
};

function Input({ cancel, name, callback }: Props) {
  const [value, setValue] = useState(name);

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      cancel();
    }

    if (event.key === 'Enter') {
      if (value.replace(/\s/g, '').length) {
        callback(value);
        setValue('');
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
          if (name === 'New List') {
            e.target.select();
          }
        }}
        onBlur={cancel}
        autoFocus // eslint-disable-line
        className='h-10 w-full rounded-lg bg-white pl-12 pr-4 text-lg text-neutral-600 outline-none ring-2 ring-inset ring-blue-500'
      />
      <IconPencilMinus className='absolute left-4 top-2 h-6 w-6 stroke-[1.25] text-neutral-400' />
    </>
  );
}

export default Input;
