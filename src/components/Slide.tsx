import React from 'react';
import { StackedCarouselSlideProps } from 'react-stacked-center-carousel';

interface SlideProps extends StackedCarouselSlideProps {
  data: {
    image: string;
    title: string;
    motto: string;
    text?: string;
    contact?: {
      web?: string;
      name?: string;
      phone?: string;
      email?: string;
    };
  }[];
}

const Slide: React.FC<SlideProps> = React.memo(function (props) {
  const { data, dataIndex, isCenterSlide, swipeTo, slideIndex } = props;

  const coverImage = data[dataIndex].image;
  //const text = data[dataIndex].text;
  const title = data[dataIndex].title;
  const motto = data[dataIndex].motto;

  return (
    <>
      <div className="card-card" draggable={false}>
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
            <img
              style={{ width: '100%' }}
              alt="fotografie vinařů"
              className="cover-image"
              src={coverImage}
            />
            <div
              className={`${
                isCenterSlide ? 'carousel-title' : 'carousel-title--none'
              }`}
            >
              {title}
            </div>
            <div
              className={`${
                isCenterSlide ? 'carousel-text--visible' : 'carousel-text--none'
              }`}
            >
              {motto}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Slide;
