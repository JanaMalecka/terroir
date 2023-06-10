import React, { FC } from 'react';
import Carousel from '../components/Carousel';

const Wineries: FC = (): JSX.Element => {
  return (
    <>
      <div className="container__content">
        <h1>Naši vinaři</h1>
      </div>
      <Carousel />
    </>
  );
};

export default Wineries;
