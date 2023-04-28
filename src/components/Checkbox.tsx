import {
  IconSquareRounded,
  IconSquareRoundedCheckFilled,
} from '@tabler/icons-react';

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
      {checked ? (
        <IconSquareRoundedCheckFilled className='text-neutral-300 group-hover:text-neutral-500' />
      ) : (
        <IconSquareRounded className='stroke-[2] text-neutral-400 group-hover:text-neutral-600' />
      )}
    </button>
  );
}

export default Checkbox;
