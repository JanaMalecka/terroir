import { FC } from 'react';
import AnimateIn, { AnimateInProps } from '../AnimateIn';

const ScaleIn: FC<AnimateInProps> = ({ children }) => (
  <AnimateIn from={{ scale: '0' }} to={{ scale: '1' }}>
    {children}
  </AnimateIn>
);

export default ScaleIn;
