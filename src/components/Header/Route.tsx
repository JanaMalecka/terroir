import { useContext } from 'react';
import NavigationContext from '../../context/navigation';

function Route({ path, children }: any) {
  const { currentPath } = useContext(NavigationContext);

  if (path === currentPath) {
    return children;
  }

  return null;
}

export default Route;
