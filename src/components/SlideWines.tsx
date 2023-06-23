import React, { useRef, useState } from 'react';
import { StackedCarouselSlideProps } from 'react-stacked-center-carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from './Button';

interface SlideProps extends StackedCarouselSlideProps {
  data: {
    id: number;
    image: string;
    wine: string;
    description: string;
    route: string;
    site: string;
    name: string;
    logo: string;
  }[];
}

const SlideWines: React.FC<SlideProps> = React.memo(function (props) {
  const { data, dataIndex, isCenterSlide, swipeTo, slideIndex } = props;

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const coverImage = data[dataIndex].image;
  const wine = data[dataIndex].wine;
  const description = data[dataIndex].description;
  const route = data[dataIndex].route;
  const site = data[dataIndex].site;
  const name = data[dataIndex].name;
  const logo = data[dataIndex].logo;
  const id = data[dataIndex].id;

  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <>
      <div
        className="card-card card-card--high"
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
              src={coverImage}
              loading="lazy"
              delayMethod="debounce"
              visibleByDefault={true}
              style={{
                width: '100%',
              }}
              alt="fotografie vinařů"
              className="cover-image"
              afterLoad={handleImageLoad}
            />
            <div className="divider"></div>

            <div
              className="slide-description"
              style={{ visibility: isImageLoaded ? 'visible' : 'hidden' }}
            >
              <div
                className={`${
                  isCenterSlide ? 'carousel-motto--visible fst-italic' : 'none'
                }`}
                onClick={handleClick}
              >
                {wine}
              </div>
              <div className="divider"></div>
              <div
                className={`${
                  isCenterSlide ? 'carousel-description--visible' : 'none'
                }`}
                ref={ref}
              >
                {description}
              </div>
              <div
                className={`${
                  isCenterSlide ? 'carousel-description--visible' : 'none'
                }`}
                ref={ref}
              >
                {route}
              </div>
              <div
                className={`${
                  isCenterSlide ? 'carousel-description--visible' : 'none'
                }`}
                ref={ref}
              >
                {name}
              </div>
              <div
                className={`${
                  isCenterSlide ? 'carousel-text--visible' : 'none'
                }`}
              >
                <div>
                  <a
                    href={`https:// ${site}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Přejít na webové stránky ${site}`}
                  >
                    <img
                      alt={`Logo vinařství ${name} `}
                      src={logo}
                      // className="logo-winery"
                      className={
                        id === 14 || id === 9
                          ? 'logo-winery--bigger'
                          : id === 2
                          ? 'logo-winery--smaller'
                          : 'logo-winery'
                      }
                    />
                  </a>
                </div>

                <div>
                  <a
                    href={`${site}`}
                    className="link-dark"
                    aria-label={`Přejít na webové stránky ${site}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button className="btn--primary">Koupit</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default SlideWines;
