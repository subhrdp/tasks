import React from 'react';
import { createPortal } from 'react-dom';
import {
  useFloating,
  useDismiss,
  useInteractions,
  FloatingOverlay,
  FloatingFocusManager,
} from '@floating-ui/react';
import Button from './Button';

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  callback: () => void;
};

function ListModal({ isOpen, setIsOpen, callback }: Props) {
  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const dismiss = useDismiss(context);
  const { getFloatingProps } = useInteractions([dismiss]);

  return (
    <>
      {isOpen &&
        createPortal(
          <FloatingOverlay
            className='z-30 bg-black/40 backdrop-blur-sm'
            lockScroll
          >
            <FloatingFocusManager context={context}>
              <div
                className='m-auto mt-20 w-[32rem] rounded-lg bg-white p-8 text-stone-600 drop-shadow-lg'
                ref={refs.setFloating}
                {...getFloatingProps()}
              >
                <h2 className='text-xl text-red-500'>Delete Confirmation</h2>
                <p className='mb-8 mt-4 text-lg'>
                  Are you sure you want to delete this list and all the tasks
                  inside it? This action cannot be undone.
                </p>
                <div className='flex flex-row-reverse'>
                  <Button
                    onClick={callback}
                    className='bg-red-500 text-white hover:bg-red-600'
                  >
                    Confirm
                  </Button>
                  <Button
                    onClick={() => setIsOpen(false)}
                    className='mr-2 border border-stone-300 hover:bg-stone-200/75'
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </FloatingFocusManager>
          </FloatingOverlay>,
          document.body
        )}
    </>
  );
}

export default ListModal;
