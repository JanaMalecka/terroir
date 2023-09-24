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
            <div
              onClick={handleClick}
              className={`${isCenterSlide ? 'carousel-subtitle' : 'none'} ${
                id === 10 ||
                id === 7 ||
                id === 2 ||
                id === 8 ||
                id === 12 ||
                id === 9 ||
                id === 11 ||
                id === 13 ||
                id === 3 ||
                id === 1 ||
                id === 4
                  ? 'carousel-subtitle--right'
                  : 'carousel-subtitle'
              }`}
            >
              {subtitle}
            </div>
            <div
              onClick={handleClick}
              className={`${isCenterSlide ? 'carousel-title' : 'none'} ${
                isCenterSlide &&
                (id === 10 ||
                  id === 7 ||
                  id === 2 ||
                  id === 8 ||
                  id === 9 ||
                  id === 11 ||
                  id === 13 ||
                  id === 3 ||
                  id === 4 ||
                  id === 12 ||
                  id === 1)
                  ? 'carousel-title--right'
                  : 'carousel-title'
              } `}
            >
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
                  isCenterSlide ? 'carousel-text--visible' : 'none'
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
                  isCenterSlide ? 'carousel-text--visible' : 'none'
                }`}
              >
                <a
                  href={`https://${web}`}
                  className="link-dark"
                  aria-label={`Přejít na webové stránky ${web}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="btn--secondary">Navštívit vinaře</Button>
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
