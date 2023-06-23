import React, { FC } from 'react';
//import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from '../components/Button';
import Link from '../features/Link';
import vineyardWideLow from '../assets/images/vineyardWideLow.webp';
import FadeUp from '../features/Animate/FadeUp';
import ScaleIn from '../features/Animate/ScaleIn';

const Home: FC = (): JSX.Element => {
  return (
    <>
      <section className="container__content--mobile"></section>
      <div className="container__content">
        <h1>TERROIR</h1>
        <h2>ČEJKOVICE</h2>
        <p>
          první apelační systém, který ukazuje neopakovatelnou typičnost odrůd
          Tramín a Rulandské modré pěstovaných na jedinečných viničních tratích
          Čejkovic.{' '}
        </p>
      </div>

      <div className="container__content light ">
        <FadeUp from={{ opacity: 0 }} to={{ opacity: 1 }}>
          <h4>Cíl projektu Terroir Čejkovice je </h4>
        </FadeUp>
        <ul>
          <FadeUp from={{ opacity: 0 }} to={{ opacity: 1 }}>
            <li className="mb-3">zdůraznění jedinečnosti čejkovických vín</li>
          </FadeUp>
          <FadeUp from={{ opacity: 0 }} to={{ opacity: 1 }}>
            <li className="mb-3">zviditelnění odrůd typických pro Čejkovice</li>
          </FadeUp>
          <FadeUp from={{ opacity: 0 }} to={{ opacity: 1 }}>
            <li className="mb-3">důraz na vinifikaci a související kvalitu</li>
          </FadeUp>
          <FadeUp from={{ opacity: 0 }} to={{ opacity: 1 }}>
            <li className="mb-3">
              zachování historického odkazu pěstování hroznů v Čejkovicích
            </li>
          </FadeUp>
        </ul>
      </div>

      <FadeUp
        from={{ opacity: 1, translate: '0 2rem' }}
        to={{ opacity: 1, translate: 'none' }}
      >
        <div className="d-flex justify-content-center">
          {/*   <LazyLoadImage
            src={vineyardWideLow}
            className="img-style"
            alt="Foto vinice"
            loading="lazy"
            delayMethod="debounce"
            visibleByDefault={true}
          /> */}
          <img
            alt="Foto vinice"
            src={vineyardWideLow}
            className="img-style"
            loading="lazy"
          />
        </div>
      </FadeUp>

      <div className="container__content light ">
        <FadeUp
          from={{ opacity: 0, translate: '0 2rem' }}
          to={{ opacity: 1, translate: 'none' }}
        >
          <p>
            Výběr Tramínu a Rulandského modrého vycházel ze staletých
            zkušeností, kdy vína z těchto odrůd jsou díky klimatickým a půdním
            podmínkám Čejkovic naprosto specifická a vynikají svou kvalitou a
            dlouhověkostí.
          </p>
        </FadeUp>
        <FadeUp
          from={{ opacity: 0, translate: '0 2rem' }}
          to={{ opacity: 1, translate: 'none' }}
        >
          <p className="fw-bold">
            Výroba vín zařazených do systému TERROIR ČEJKOVICE se řídí přísným
            statutem pro pěstování a vinifikaci, tak aby mohla vznikat komplexní
            vína, která obstojí v čase.
          </p>
        </FadeUp>
        <FadeUp
          from={{ opacity: 0, translate: '0 2rem' }}
          to={{ opacity: 1, translate: 'none' }}
        >
          <p>
            Terroirní vína potřebují čas, čas na zrání na sudu a čas na zrání na
            láhvi. Proto i při jeho vychutnávání nelze spěchat. Dejte těmto
            vínům vhodnou sklenici a prostor se projevit až do terciálních
            aromat a zážitek je potom opravdu jedinečný.
          </p>
        </FadeUp>
        <ScaleIn from={{ scale: '0' }} to={{ scale: '1' }}>
          <Link to="/statut-terroir-cejkovice">
            {' '}
            <Button className="btn--primary">Více o terroir</Button>
          </Link>
        </ScaleIn>
      </div>
    </>
  );
};

export default Home;
