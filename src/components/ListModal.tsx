import React from 'react';
import { createPortal } from 'react-dom';
import {
  useFloating,
  useDismiss,
  useInteractions,
  FloatingOverlay,
  FloatingFocusManager,
} from '@floating-ui/react';

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
          <FloatingOverlay className='bg-black/40 backdrop-blur-sm' lockScroll>
            <FloatingFocusManager context={context}>
              <div
                className='m-auto mt-20 w-[32rem] rounded-lg bg-white p-8 drop-shadow-lg'
                ref={refs.setFloating}
                {...getFloatingProps()}
              >
                <h2 className='text-xl text-red-500'>Delete Confirmation</h2>
                <p className='mb-8 mt-4 text-lg text-gray-500'>
                  Are you sure you want to delete this list and all the tasks
                  inside it? This action cannot be undone.
                </p>
                <div className='flex flex-row-reverse'>
                  <button
                    onClick={callback}
                    className='flex h-9 items-center rounded-lg bg-rose-500 px-4 text-lg text-white hover:bg-rose-600'
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className='mr-2 flex h-9 items-center rounded-lg border-2 border-gray-200 bg-gray-100 px-4 text-lg text-gray-600 hover:bg-gray-200'
                  >
                    Cancel
                  </button>
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
