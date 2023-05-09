import { useContext } from 'react';
import NavigationContext from '../context/navigation';

interface NavigationContextType {
  navigate: (to: string) => void;
  currentPath: string;
}

function useNavigation(): NavigationContextType {
  return useContext(NavigationContext);
}

export default useNavigation;
