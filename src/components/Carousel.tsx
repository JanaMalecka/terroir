import React from 'react';
import data from '../data.json';

import {
  StackedCarousel,
  ResponsiveContainer,
} from 'react-stacked-center-carousel';
import Fab from '@mui/material/Fab';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import Slide from './Slide';

const Carousel = () => {
  const ref = React.useRef<StackedCarousel>(null!); //initialize the ref with a value of null!
  return (
    <div className="container carousel-layout">
      <div className="card">
        <div style={{ width: '100%', position: 'relative' }}>
          <ResponsiveContainer
            carouselRef={ref}
            render={(width, carouselRef) => {
              return (
                <StackedCarousel
                  ref={carouselRef}
                  slideComponent={Slide}
                  slideWidth={450}
                  carouselWidth={width}
                  data={data}
                  maxVisibleSlide={5}
                  disableSwipe
                  customScales={[1, 0.85, 0.7, 0.55]}
                  transitionTime={450}
                />
              );
            }}
          />

          <Fab
            className="card-button left"
            size="small"
            onClick={() => ref.current?.goBack()}
          >
            <KeyboardArrowLeftIcon style={{ fontSize: 30 }} />
          </Fab>
          <Fab
            className="card-button right"
            size="small"
            onClick={() => ref.current?.goNext()}
          >
            <KeyboardArrowRightIcon style={{ fontSize: 30 }} />
          </Fab>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
