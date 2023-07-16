import React, { FC } from 'react';
import Carousel from '../components/Carousel';
import SlideWines from '../components/SlideWines';
import wines from '../components/wines.json';

const Wines: FC = (): JSX.Element => {
  return (
    <>
      <div className="container__content">
        <h1 className="">ZATŘÍDĚNÁ VÍNA</h1>
      </div>
      <Carousel
        slideComponent={SlideWines}
        data={wines}
        className="slide-wines card-button--wines"
      />
    </>
  );
};

export default Wines;
