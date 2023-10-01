import React, { useRef, useState } from 'react';
import { StackedCarouselSlideProps } from 'react-stacked-center-carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from './Button';

interface SlideProps extends StackedCarouselSlideProps {
  data: {
    id: number;
    image: string;
    title: string;
    titleLarge: string;
    subtitle: string;
    motto: string;
    text: string[];
    contact: {
      web: string;
      name: string;
      phone: string;
      email: string;
    };
    logo: string;
  }[];
}

const Slide: React.FC<SlideProps> = React.memo(function (props) {
  const { data, dataIndex, isCenterSlide, swipeTo, slideIndex } = props;

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const coverImage = data[dataIndex].image;
  const text = data[dataIndex].text;
  const title = data[dataIndex].title;
  const titleLarge = data[dataIndex].titleLarge;
  const subtitle = data[dataIndex].subtitle;
  const motto = data[dataIndex].motto;
  const web = data[dataIndex].contact.web;
  const name = data[dataIndex].contact.name;
  const phone = data[dataIndex].contact.phone;
  const email = data[dataIndex].contact.email;
  const id = data[dataIndex].id;
  const logo = data[dataIndex].logo;

  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  function generateTitleClassName(isCenterSlide: boolean, id: number) {
    if (isCenterSlide) {
      if ([10, 7, 2, 9, 11, 13, 4, 12, 1].includes(id)) {
        return 'carousel-title carousel-title--right';
      } else if ([8, 3].includes(id)) {
        return 'carousel-title carousel-title--rightLarge';
      } else {
        return 'carousel-title';
      }
    } else {
      return 'none';
    }
  }

  const titleClassName = generateTitleClassName(isCenterSlide, id);

  function generateSubtitleClassName(isCenterSlide: boolean, id: number) {
    if (isCenterSlide) {
      if ([10, 7, 2, 9, 11, 13, 4, 12, 1, 8, 3].includes(id)) {
        return 'carousel-subtitle carousel-subtitle--right';
      } else {
        return 'carousel-subtitle';
      }
    } else {
      return 'none';
    }
  }

  const subtitleClassName = generateSubtitleClassName(isCenterSlide, id);

  function generateDescriptionClassName(id: number) {
    if (
      id === 13 ||
      id === 12 ||
      id === 9 ||
      id === 1 ||
      id === 2 ||
      id === 4
    ) {
      return 'slide-description--oneRow';
    } else if (id === 11 || id === 10) {
      return 'slide-description--twoRows';
    } else if (id === 6 || id === 3) {
      return 'slide-description--twoOneRows';
    } else if (id === 5) {
      return 'slide-description--threeTwoRows';
    } else if (id === 7) {
      return 'slide-description--threeTwoRowsLarge';
    } else {
      return 'slide-description--threeRows';
    }
  }

  const DescriptionClassName = generateDescriptionClassName(id);

  return (
    <>
      <div
        className="card-card card-card--wineries"
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
            {/* <img
              style={{ width: '100%' }}
              alt="fotografie vinařů"
              className="cover-image"
              src={coverImage}
            /> */}
            <div onClick={handleClick} className={subtitleClassName}>
              {subtitle}
            </div>
            <div onClick={handleClick} className={titleClassName}>
              {title}
            </div>
            <div
              onClick={handleClick}
              className={`${
                isCenterSlide && (id === 1 || id === 12 || id === 4)
                  ? 'carousel-titleLarge'
                  : 'none'
              }`}
            >
              {titleLarge}
            </div>

            <div
              className={DescriptionClassName}
              style={{ visibility: isImageLoaded ? 'visible' : 'hidden' }}
            >
              <div
                className={`${
                  isCenterSlide ? 'carousel-motto--visible fst-italic' : 'none'
                }`}
                onClick={handleClick}
              >
                {`"${motto}"`}
              </div>
              <div className={`${isCenterSlide ? 'divider' : 'none'}`}></div>
              <div
                className={`${
                  isCenterSlide ? 'carousel-text--visible' : 'none'
                }`}
                ref={ref}
              >
                {text.map((sentence, index) => (
                  <p key={index}>{sentence}</p>
                ))}
              </div>
              <div
                className={`${
                  isCenterSlide ? 'carousel-contact--visible' : 'none'
                }`}
              >
                <div className="d-flex justify-content-around align-items-center winemakers-contact">
                  <div className="">
                    <div>
                      <a
                        href={`https://${web}`}
                        className="link-dark"
                        aria-label={`Přejít na webové stránky ${web}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {web}
                      </a>
                    </div>
                    <div>{name}</div>
                    <div>
                      <a
                        href={`tel:${phone}`}
                        className="link-dark"
                        aria-label={`${phone}`}
                      >
                        {phone}
                      </a>
                    </div>
                    <div>
                      <a
                        href={`mailto:${email}`}
                        className="link-dark"
                        aria-label={`email ${email}`}
                      >
                        {email}
                      </a>
                    </div>
                  </div>

                  <div>
                    <a
                      href={`https://${web}`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Přejít na webové stránky ${web}`}
                    >
                      <img
                        alt={`Logo vinařství ${title} `}
                        src={logo}
                        // className="logo-winery"
                        className={
                          id === 11 || id === 8
                            ? 'logo-winery--bigger'
                            : id === 2
                            ? 'logo-winery--smaller'
                            : 'logo-winery'
                        }
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div
                className={`${
                  isCenterSlide ? 'carousel-contact--visibleButton' : 'none'
                }`}
              >
                <a
                  href={`https://${web}`}
                  className="link-dark"
                  aria-label={`Přejít na webové stránky ${web}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="btn--tertiary">Navštívit vinaře</Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Slide;
