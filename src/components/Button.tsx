import React, { ReactNode } from 'react';
import className from 'classnames';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, className, onClick }: ButtonProps): JSX.Element => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
