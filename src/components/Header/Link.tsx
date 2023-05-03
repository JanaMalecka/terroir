import classNames from 'classnames';
import { useContext } from 'react';
import NavigationContext from '../../context/navigation';

function Link({ to, children, className, activeClassName }: any) {
  const { navigate, currentPath } = useContext(NavigationContext);

  const classes = classNames(
    'navbar-link',
    className,
    currentPath === to && activeClassName
  );

  const handleClick = (event: any) => {
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
}

export default Link;
