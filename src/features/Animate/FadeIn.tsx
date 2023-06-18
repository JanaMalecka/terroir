import { FC } from 'react';
import AnimateIn, { AnimateInProps } from '../AnimateIn';

const FadeIn: FC<AnimateInProps> = ({ children }) => (
  <AnimateIn from={{ opacity: 0 }} to={{ opacity: 1 }}>
    {children}
  </AnimateIn>
);
export default FadeIn;
