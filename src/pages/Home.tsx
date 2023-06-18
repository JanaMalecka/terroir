import React, { FC } from 'react';
//import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from '../components/Button';
import Link from '../features/Link';
import vineyardWide from '../assets/images/vineyardWide.jpg';

const Home: FC = (): JSX.Element => {
  /*  const scrollToTop = () => {
    window.scrollTo(0, 0);
  }; */

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
        <h3>Čejkovice</h3>

        <p>
          patří mezi významné tradiční vinařské obce na jižní Moravě, aby tomu
          tak bylo i nadále, rozhodli se v roce 2018 ČTVRTEČNÍCI sdružení vinařů
          Čejkovice z.s. zdůraznit jedinečnost místních vín, vytvořením prvního
          apelačního systému: TERROIR ČEJKOVICE.
        </p>

        <p>
          Během posledních třiceti let prošlo vinohradnictví a vinařství v České
          republice obrovským vývojem ať už v agrotechnice, šlechtění či nových
          technologických postupech při výrobě vína. Přesto se čím dál častěji
          ohlížíme do minulosti, kdy vinařství dělali naši otcové, dědové a
          pradědové.
        </p>
      </div>

      <div className="container__content">
        <p>
          Jejich mottem byla především pokora a to jak k půdě, tak k samotnému
          vínu. Tato pokora je základem stavebním kamenem pro Terroir Čejkovice.
        </p>
      </div>
      <div className="container__content light ">
        <p className="fw-bold">
          Od počátku bylo zřejmé, že historicky typickými odrůdami pro Čejkovice
          jsou Tramín a Rulandské modré (Pinot Noir).
        </p>
      </div>

      <div className="d-flex justify-content-center">
        {/* <LazyLoadImage
          src={vineyardWide}
          className="img-style"
          alt="Foto vinice"
          loading="lazy"
        /> */}
        <img
          alt="Foto vinice"
          src={vineyardWide}
          className="img-style"
          loading="lazy"
        />
      </div>

      <div className="container__content light ">
        <p>
          Výběr Tramínu a Rulandského modrého vycházel ze staletých zkušeností,
          kdy vína z těchto odrůd jsou díky klimatickým a půdním podmínkám
          Čejkovic naprosto specifická a vynikají svou kvalitou a dlouhověkostí.
        </p>

        <p className="fw-bold">
          Výroba vín zařazených do systému TERROIR ČEJKOVICE se řídí přísným
          statutem pro pěstování a vinifikaci, tak aby mohla vznikat komplexní
          vína, která obstojí v čase.
        </p>

        <p>
          Terroirní vína potřebují čas, čas na zrání na sudu a čas na zrání na
          láhvi. Proto i při jeho vychutnávání nelze spěchat. Dejte těmto vínům
          vhodnou sklenici a prostor se projevit až do terciálních aromat a
          zážitek je potom opravdu jedinečný.
        </p>

        <Link to="/statut-terroir-cejkovice">
          {' '}
          <Button className="btn--primary">Více o terroir</Button>
        </Link>
      </div>
    </>
  );
};

export default Home;
