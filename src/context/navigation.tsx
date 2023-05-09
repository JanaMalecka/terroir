import { createContext, useState, useEffect, ReactNode } from 'react';
//import { Context } from 'vm';

type NavigationContextType = {
  navigate: (to: string) => void;
  currentPath: string;
};

const NavigationContext = createContext<NavigationContextType>({
  navigate: () => {},
  currentPath: '',
});

type NavigationProviderProps = {
  children: ReactNode;
};

const NavigationProvider = ({ children }: NavigationProviderProps) => {
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

  const navigate = (to: string) => {
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
