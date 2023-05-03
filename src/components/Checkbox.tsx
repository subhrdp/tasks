import clsx from 'clsx';
import { IconCheck } from '@tabler/icons-react';

type Props = {
  checked: boolean;
  handleClick: () => void;
};

function Checkbox({ checked, handleClick }: Props) {
  return (
    <button
      onClick={handleClick}
      className='flex h-8 w-8 shrink-0 items-center justify-center transition-[transform] hover:scale-110'
    >
      <div
        className={clsx(
          'h-5 w-5 rounded',
          checked
            ? 'bg-stone-300 group-hover:bg-stone-400'
            : 'ring-2 ring-inset ring-stone-300 group-hover:ring-stone-500'
        )}
      >
        {checked && <IconCheck className='h-5 w-5 stroke-[2.5] text-white' />}
      </div>
    </button>
  );
}

export default Checkbox;
