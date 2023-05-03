import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import Tooltip from './Tooltip';
import DatePicker from './DatePicker';
import formatDate from '../utils/formatDate';
import { IconCalendarPlus } from '@tabler/icons-react';

type Props = {
  date: string | null;
  onChange: (input: Date | undefined) => void;
};

function Date({ date, onChange }: Props) {
  const [edit, setEdit] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Tooltip label={date ? 'Change Date' : 'Schedule'} buttonRef={ref}>
        {(attrs: React.HTMLAttributes<HTMLButtonElement>) => (
          <button
            ref={ref}
            {...attrs}
            onClick={() => setEdit((prevState) => !prevState)}
            className={clsx(
              'shrink-0',
              date
                ? 'mr-2 h-7 rounded bg-stone-200 px-2 text-base text-stone-500 hover:!bg-stone-300 group-hover:bg-stone-300/75 group-hover:text-stone-600'
                : 'ml-1 flex h-8 w-8 items-center justify-center rounded-lg opacity-0 hover:bg-stone-300/50 focus-visible:opacity-100 group-hover:opacity-100'
            )}
          >
            {date ? (
              formatDate(date)
            ) : (
              <IconCalendarPlus className='stroke-[1.25]' />
            )}
          </button>
        )}
      </Tooltip>
      <DatePicker
        reference={ref.current}
        isOpen={edit}
        setIsOpen={setEdit}
        date={date}
        onSelect={(input) => {
          setEdit(false);
          onChange(input);
        }}
      />
    </>
  );
}

export default Date;
