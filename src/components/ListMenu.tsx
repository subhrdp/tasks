import React, { useLayoutEffect } from 'react';
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
import Button from './Button';

type Props = {
  reference: HTMLButtonElement | null;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onRename: () => void;
  onDelete: () => void;
};

function ListMenu({ reference, isOpen, setIsOpen, onRename, onDelete }: Props) {
  const { x, y, strategy, refs, context } = useFloating({
    strategy: 'fixed',
    placement: 'bottom-end',
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset({ mainAxis: 8, crossAxis: 8 }), flip(), shift()],
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
        <FloatingFocusManager context={context}>
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
            className='z-20 rounded-lg border border-stone-300 bg-white p-1 pb-2 drop-shadow-lg before:absolute before:-top-2 before:left-0 before:h-2 before:w-full after:absolute after:-bottom-2 after:left-0 after:h-2 after:w-full'
          >
            <div className='mx-2 mb-1 flex h-10 items-center border-b border-stone-200 px-2 text-lg text-stone-400'>
              List Options
            </div>
            <Button
              onClick={() => {
                setIsOpen(false);
                onRename();
              }}
              className='w-full hover:bg-stone-200/75'
            >
              Rename List
            </Button>
            <Button
              onClick={() => {
                onDelete();
              }}
              className='w-full hover:bg-stone-200/75'
            >
              Delete List
            </Button>
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
}

export default ListMenu;
