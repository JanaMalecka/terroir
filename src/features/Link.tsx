import React, { useContext, FC } from 'react';
import NavigationContext from '../context/navigation';
import classNames from 'classnames';

type LinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
};

const Link: FC<LinkProps> = ({ to, children, className, activeClassName }) => {
  const { currentPath } = useContext(NavigationContext);

  const classes = classNames(className, currentPath === to && activeClassName);

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    window.location.href = to;
  };

  return (
    <a href={to} className={classes} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
