import React, { useState } from 'react';
import { StackedCarouselSlideProps } from 'react-stacked-center-carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface SlideProps extends StackedCarouselSlideProps {
  data: {
    image: string;
    title: string;
  }[];
}

const SlideVarieties: React.FC<SlideProps> = React.memo(function (props) {
  const { data, dataIndex, isCenterSlide, swipeTo, slideIndex } = props;

  const coverImage = data[dataIndex].image;
  const title = data[dataIndex].title;

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <>
      <div
        className="card-card"
        draggable={false}
        style={{ visibility: isImageLoaded ? 'visible' : 'hidden' }}
      >
        <div className={`cover fill ${isCenterSlide ? 'off' : 'on'}`}>
          <div
            className="card-overlay fill"
            onClick={() => {
              if (!isCenterSlide) swipeTo(slideIndex);
            }}
          />
        </div>
        <div className="detail fill">
          <div className="discription flex-column">
            <LazyLoadImage
              style={{ width: '100%' }}
              alt="fotografie hroznů"
              className="cover-image"
              src={coverImage}
              loading="lazy"
              delayMethod="debounce"
              visibleByDefault={true}
              afterLoad={handleImageLoad}
            />
            {/* <img
              style={{ width: '100%' }}
              alt="fotografie vinařů"
              className="cover-image"
              src={coverImage}
              
            /> */}
            <div className={`${isCenterSlide ? 'carousel-title' : 'none'}`}>
              {title}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default SlideVarieties;
