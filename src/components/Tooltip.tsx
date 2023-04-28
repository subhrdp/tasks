import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useInteractions,
  useMergeRefs,
} from '@floating-ui/react';

type Props = {
  children: (attrs: React.HTMLAttributes<HTMLButtonElement>) => React.ReactNode;
  label: string;
  buttonRef?: any;
};

function Tooltip({ children, label, buttonRef }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const { x, y, strategy, refs, context } = useFloating({
    strategy: 'fixed',
    placement: 'top',
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(8), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, {
    delay: {
      open: 250,
      close: 0,
    },
  });

  const focus = useFocus(context);

  const dismiss = useDismiss(context, {
    referencePress: true,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
  ]);

  const mergedRef = useMergeRefs([refs.setReference, buttonRef]);

  return (
    <>
      {children({ ...getReferenceProps({ ref: mergedRef }) })}
      {isOpen &&
        createPortal(
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
            className='rounded bg-neutral-600 px-2 py-1 text-base font-[350] text-neutral-100 drop-shadow'
          >
            {label}
          </div>,
          document.body
        )}
    </>
  );
}

export default Tooltip;
