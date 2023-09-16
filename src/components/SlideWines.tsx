import React, { useRef, useState } from 'react';
import { StackedCarouselSlideProps } from 'react-stacked-center-carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from './Button';

interface SlideProps extends StackedCarouselSlideProps {
  data: {
    id: number;
    image: string;
    wine: string;
    year: number;
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
  const year = data[dataIndex].year;
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
        className="card-card card-card--high card-card-bottle"
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
              className="cover-image--fit cover-image--fitBottle"
              afterLoad={handleImageLoad}
            />
            <img
              alt={`Logo vinařství ${name} `}
              onClick={handleClick}
              src={logo}
              // className="logo-winery"
              className={`${
                isCenterSlide
                  ? id === 11
                    ? 'logo-wines--bigger'
                    : id === 12
                    ? 'logo-wines--smaller'
                    : 'logo-wines'
                  : 'none'
              }`}
            />
            <div
              className={`${
                isCenterSlide ? 'carousel-specification--name' : 'none'
              }`}
            >
              {name}
            </div>

            <div
              className="slide-description--wines"
              style={{ visibility: isImageLoaded ? 'visible' : 'hidden' }}
            >
              <div
                className={`${
                  isCenterSlide ? 'carousel-specification--visible' : 'none'
                }`}
                onClick={handleClick}
              >
                <h2 className="carousel-specification--wine">{wine}</h2>
                <p>{year}</p>
                <div>{description}</div>
                <div>{route}</div>

                <div>
                  <a
                    href={`${site}`}
                    className="link-dark"
                    aria-label={`Přejít na webové stránky ${site}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button className="btn--tertiary">Koupit</Button>
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
