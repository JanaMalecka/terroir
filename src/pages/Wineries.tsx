import React, { FC, useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import Slide from '../components/Slide';
import data from '../data.json';

const shuffleArray = (array: any[]) => {
  let currentIndex = array.length,
    randomIndex,
    tempValue;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    tempValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempValue;
  }
  return array;
};

const Wineries: FC = (): JSX.Element => {
  const [shuffledData, setShuffledData] = useState(data);

  useEffect(() => {
    // Shuffle the data once when the component is mounted
    setShuffledData(shuffleArray(data));
  }, []);

  return (
    <>
      <div className="container__content">
        <h1>ČLENSKÁ VINAŘSTVÍ</h1>
      </div>
      <Carousel
        slideComponent={Slide}
        data={shuffledData}
        className="slide-wineries"
      />
    </>
  );
};

export default Wineries;
