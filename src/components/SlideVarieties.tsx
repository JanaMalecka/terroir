import React from 'react';
import { StackedCarouselSlideProps } from 'react-stacked-center-carousel';

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

  console.log(data);

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
