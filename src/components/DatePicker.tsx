import React, { useLayoutEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useDismiss,
  useInteractions,
  FloatingFocusManager,
} from '@floating-ui/react';

type Props = {
  reference: HTMLButtonElement | null;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  date: string | null;
  onSelect: (input: Date | undefined) => void;
};

function DatePicker({ reference, isOpen, setIsOpen, date, onSelect }: Props) {
  const { x, y, strategy, refs, context } = useFloating({
    strategy: 'fixed',
    placement: date ? 'bottom-start' : 'bottom',
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [
      offset(date ? 10 : { crossAxis: -64, mainAxis: 8 }),
      flip(),
      shift(),
    ],
    whileElementsMounted: autoUpdate,
  });

  const dismiss = useDismiss(context);

  const { getFloatingProps } = useInteractions([dismiss]);

  useLayoutEffect(() => {
    refs.setReference(reference);
  }, [refs, reference]);

  return (
    <>
      {isOpen && (
        <FloatingFocusManager context={context} returnFocus={false}>
          <div
            {...getFloatingProps({
              ref: refs.setFloating,
              style: {
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
                width: 'max-content',
              },
            })}
            className='z-20 rounded-lg border border-stone-300 bg-white text-base drop-shadow-lg before:absolute before:-top-2 before:left-0 before:h-2 before:w-full after:absolute after:-bottom-2 after:left-0 after:h-2 after:w-full'
          >
            <DayPicker
              mode='single'
              selected={date ? new Date(date) : undefined}
              onSelect={onSelect}
            />
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
}

export default DatePicker;
