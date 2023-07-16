import React, { FC } from 'react';
import Carousel from '../components/Carousel';
import Slide from '../components/Slide';
import data from '../data.json';

const Wineries: FC = (): JSX.Element => {
  return (
    <>
      <div className="container__content">
        <h1>ČLENSKÁ VINAŘSTVÍ</h1>
      </div>
      <Carousel slideComponent={Slide} data={data} className="slide-wineries" />
    </>
  );
};

export default Wineries;
