import { createContext, useState, useEffect } from 'react';
import { Context } from 'vm';

const NavigationContext = createContext({} as Context);

const NavigationProvider = ({ children }: any) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handler);

    return () => {
      window.removeEventListener('popstate', handler);
    };
  }, []);

  const navigate = (to: any) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ navigate, currentPath }}>
      {children}
    </NavigationContext.Provider>
  );
};

export { NavigationProvider };
export default NavigationContext;
