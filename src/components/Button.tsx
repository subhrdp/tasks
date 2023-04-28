import React, { forwardRef } from 'react';
import clsx from 'clsx';

type Props = React.ComponentPropsWithoutRef<'button'>;

const Button = forwardRef<HTMLButtonElement, Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={clsx(
          'flex h-10 flex-shrink-0 items-center rounded-lg px-4 text-lg',
          className
        )}
      >
        {children}
      </button>
    );
  }
);

export default Button;
