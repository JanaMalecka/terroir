import React, { FC, useContext, ReactNode } from 'react';
import NavigationContext from '../../context/navigation';

type RouteProps = {
  path: string;
  children: ReactNode;
};

const Route: FC<RouteProps> = ({ path, children }) => {
  const { currentPath } = useContext(NavigationContext);

  if (path === currentPath) {
    return <>{children}</>;
  }

  return null;
};

export default Route;
