import React, { forwardRef } from 'react';
import clsx from 'clsx';
import Tooltip from './Tooltip';

type Props = React.ComponentPropsWithoutRef<'button'> & {
  label: string;
};

const IconButton = forwardRef<HTMLButtonElement, Props>(
  ({ label, color, className, children, ...props }, ref) => {
    return (
      <Tooltip label={label} buttonRef={ref}>
        {(attrs: React.HTMLAttributes<HTMLButtonElement>) => (
          <button
            ref={ref}
            {...props}
            {...attrs}
            className={clsx(
              'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg hover:bg-stone-300/50 [&>svg]:stroke-[1.25]',
              className
            )}
          >
            {children}
          </button>
        )}
      </Tooltip>
    );
  }
);

export default IconButton;
