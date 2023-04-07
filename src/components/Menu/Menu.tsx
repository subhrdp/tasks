import React, { useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
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
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  reference: HTMLButtonElement | null;
};

function Menu({ isOpen, setIsOpen, children, reference }: Props) {
  const { x, y, strategy, refs, context } = useFloating({
    placement: 'right-start',
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset({ crossAxis: 8 }), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  const dismiss = useDismiss(context);

  const { getFloatingProps } = useInteractions([dismiss]);

  useLayoutEffect(() => {
    refs.setReference(reference);
  }, [refs, reference]);

  return (
    <>
      {isOpen &&
        createPortal(
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
              className='rounded-lg border border-gray-200 bg-white p-1 pb-2 drop-shadow-lg'
            >
              {children}
            </div>
          </FloatingFocusManager>,
          document.body
        )}
    </>
  );
}

export default Menu;
