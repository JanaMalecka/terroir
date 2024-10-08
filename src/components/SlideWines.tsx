import React, { useRef, useState } from 'react';
import { StackedCarouselSlideProps } from 'react-stacked-center-carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from './Button';

interface SlideProps extends StackedCarouselSlideProps {
  data: {
    id: number;
    image: string;
    wine: string;
    subWine: string;
    year: number;
    description: string;
    route: string;
    site: string;
    name: string;
    logo: string;
    text: string;
  }[];
}

const SlideWines: React.FC<SlideProps> = React.memo(function (props) {
  const { data, dataIndex, isCenterSlide, swipeTo, slideIndex } = props;

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const coverImage = data[dataIndex].image;
  const wine = data[dataIndex].wine;
  const subWine = data[dataIndex].subWine;
  const year = data[dataIndex].year;
  const description = data[dataIndex].description;
  const route = data[dataIndex].route;
  const site = data[dataIndex].site;
  const name = data[dataIndex].name;
  const logo = data[dataIndex].logo;
  // eslint-disable-next-line
  const id = data[dataIndex].id;
  const text = data[dataIndex].text;

  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const isMobile = window.matchMedia('(max-width: 767px)').matches;

  return (
    <>
      <div
        className="card-card card-card--high card-card-bottle"
        draggable={false}
        style={{
          visibility:
            isImageLoaded || (isCenterSlide && !isMobile)
              ? 'visible'
              : 'hidden',
        }}
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
              visibleByDefault={isCenterSlide && !isMobile ? true : false}
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
                  ? name === 'Vinařství Veverka'
                    ? 'logo-wines--bigger'
                    : name === 'Vinařství Škrobák'
                    ? 'logo-wines--smaller'
                    : 'logo-wines'
                  : 'none'
              }`}
            />

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
                <h2 className="carousel-specification--wine mt-5">{wine}</h2>
                <h4>{subWine}</h4>
                <p>{year}</p>
                <div>{description}</div>
                <div>{route}</div>
                <div className="specification--text">{text}</div>

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
