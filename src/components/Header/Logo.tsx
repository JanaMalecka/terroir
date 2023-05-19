import React, { FC } from 'react';
import NavigationLink from './NavigationLink';

const Logo: FC = (): JSX.Element => {
  return (
    <div className="logo__container">
      <NavigationLink to={'/'}>
        <div className="logo-terroir"></div>{' '}
      </NavigationLink>
    </div>
  );
};

export default Logo;
