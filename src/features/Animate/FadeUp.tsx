import { FC } from 'react';
import AnimateIn, { AnimateInProps } from '../AnimateIn';

const FadeUp: FC<AnimateInProps> = ({ children }) => (
  <AnimateIn
    from={{ opacity: 0, translate: '0 2rem' }}
    to={{ opacity: 1, translate: 'none' }}
  >
    {children}
  </AnimateIn>
);

export default FadeUp;
