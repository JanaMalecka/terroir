import React, { FC } from 'react';
import Link from './Link';

const Logo: FC = (): JSX.Element => {
  return (
    <div className="logo__container">
      <Link to={'/'}>
        <div className="logo"></div>{' '}
      </Link>
    </div>
  );
};

export default Logo;
