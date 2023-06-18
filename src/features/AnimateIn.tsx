import { CSSProperties, useRef } from 'react';
import useElementOnScreen from '../hooks/use-element-on-screen';

export interface AnimateInProps {
  // Explicitly define the type for the children prop
  from: CSSProperties;
  to: CSSProperties;
  children: React.ReactNode;
}

const AnimateIn: React.FC<AnimateInProps> = ({ from, to, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref);
  const defaultStyles: CSSProperties = {
    transition: '600ms ease-in-out',
  };

  return (
    <div
      ref={ref}
      style={
        onScreen
          ? {
              ...defaultStyles,
              ...to,
            }
          : {
              ...defaultStyles,
              ...from,
            }
      }
    >
      {children}
    </div>
  );
};
export default AnimateIn;
