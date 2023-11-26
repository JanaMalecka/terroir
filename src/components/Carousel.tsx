import React from 'react';

import {
  StackedCarousel,
  ResponsiveContainer,
} from 'react-stacked-center-carousel';
import Fab from '@mui/material/Fab';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface CarouselProps {
  slideComponent: React.FC<any>;
  data: any;
  className: string;
}

const Carousel: React.FC<CarouselProps> = ({
  slideComponent,
  data,
  className,
}) => {
  const ref = React.useRef<StackedCarousel>(null!); //initialize the ref with a value of null!

  const isMobileDevice = window.matchMedia('(max-width: 767px)').matches;

  return (
    <div className="carousel-layout">
      <div className="card">
        <div
          style={{
            width: '100%',
            position: 'relative',
          }}
        >
          <ResponsiveContainer
            carouselRef={ref}
            render={(width, carouselRef) => {
              return (
                <StackedCarousel
                  ref={carouselRef}
                  slideComponent={slideComponent}
                  slideWidth={550}
                  carouselWidth={width}
                  data={data}
                  maxVisibleSlide={5}
                  disableSwipe={true}
                  customScales={[1, 0.85, 0.7, 0.55]}
                  transitionTime={450}
                  className={className}
                />
              );
            }}
          />

          <Fab
            className={`card-button ${className} left`}
            size="small"
            onClick={() => ref.current?.goBack()}
          >
            <KeyboardArrowLeftIcon style={{ fontSize: 30 }} />
          </Fab>
          <Fab
            className={`card-button ${className} right`}
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
