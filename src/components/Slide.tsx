import React, { useRef } from 'react';
import { StackedCarouselSlideProps } from 'react-stacked-center-carousel';

interface SlideProps extends StackedCarouselSlideProps {
  data: {
    image: string;
    title: string;
    motto: string;
    text: string;
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

  const coverImage = data[dataIndex].image;
  const text = data[dataIndex].text;
  const title = data[dataIndex].title;
  const motto = data[dataIndex].motto;
  const web = data[dataIndex].contact.web;
  const name = data[dataIndex].contact.name;
  const phone = data[dataIndex].contact.phone;
  const email = data[dataIndex].contact.email;
  const logo = data[dataIndex].logo;

  const ref = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
              onClick={handleClick}
              className={`${isCenterSlide ? 'carousel-title' : 'none'}`}
            >
              {title}
            </div>
            <div className="divider"></div>

            <div className="slide-description">
              <div
                className={`${
                  isCenterSlide ? 'carousel-motto--visible fst-italic' : 'none'
                }`}
                onClick={handleClick}
              >
                {`"${motto}"`}
              </div>
              <div className="divider"></div>
              <div
                className={`${
                  isCenterSlide ? 'carousel-text--visible' : 'none'
                }`}
                ref={ref}
              >
                {text}
              </div>
              <div
                className={`${
                  isCenterSlide ? 'carousel-text--visible' : 'none'
                }`}
              >
                <h4>Kontakt:</h4>
                <div className="d-flex justify-content-around align-items-center winemakers-contact">
                  <div className="">
                    <div>
                      <a
                        href={`${web}`}
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
                        href={`${phone}`}
                        className="link-dark"
                        aria-label={`${phone}`}
                      >
                        {phone}
                      </a>
                    </div>
                    <div>
                      <a
                        href={`${email}`}
                        className="link-dark"
                        aria-label={`email ${email}`}
                      >
                        {email}
                      </a>
                    </div>
                  </div>
                  <div>
                    <a
                      href={web}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Přejít na webové stránky ${web}`}
                    >
                      <img
                        alt={`Logo vinařství ${title} `}
                        src={logo}
                        className="logo-winery"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Slide;
