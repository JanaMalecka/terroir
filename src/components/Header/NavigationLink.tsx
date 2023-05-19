import React, { useContext, FC } from 'react';
import NavigationContext from '../../context/navigation';
import classNames from 'classnames';

type NavigationLinkProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
  activeClassName?: string;
};

const NavigationLink: FC<NavigationLinkProps> = ({
  to,
  children,
  className,
  activeClassName,
}) => {
  const { navigate, currentPath } = useContext(NavigationContext);

  const classes = classNames(className, currentPath === to && activeClassName);

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    navigate(to);
  };

  return (
    <a href={to} className={classes} onClick={handleClick}>
      {children}
    </a>
  );
};

export default NavigationLink;
