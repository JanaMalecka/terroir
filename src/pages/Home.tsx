import React, { FC } from 'react';
import Button from '../components/Button';

const Home: FC = (): JSX.Element => {
  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    console.log(event.target);
  };

  return (
    <>
      <section className="container__content--mobile"></section>
      <div className="container__content">
        <section id="intro">
          <h1>TERROIR</h1>
          <h2>ČEJKOVICE</h2>
          <p>
            první apelační systém, který ukazuje neopakovatelnou typičnost odrůd
            Tramín a Rulandské modré pěstovaných na jedinečných viničních
            tratích Čejkovic.{' '}
          </p>
          <p>
            Čejkovice patří mezi významné tradiční vinařské obce na jižní
            Moravě, aby tomu tak bylo i nadále, rozhodli se v roce 2018
            ČTVRTEČNÍCI sdružení vinařů Čejkovice z.s. zdůraznit jedinečnost
            místních vín, vytvořením prvního apelačního systému: TERROIR
            ČEJKOVICE.
          </p>
          <p>
            Během posledních třiceti let prošlo vinohradnictví a vinařství v
            České republice obrovským vývojem ať už v agrotechnice, šlechtění či
            nových technologických postupech při výrobě vína. Přesto se čím dál
            častěji ohlížíme do minulosti, kdy vinařství dělali naši otcové,
            dědové a pradědové. Jejich mottem byla především pokora a to jak k
            půdě, tak k samotnému vínu. Tato pokora je základem stavebním
            kamenem pro Terroir Čejkovice.
          </p>
          <p>
            Od počátku bylo zřejmé, že historicky typickými odrůdami pro
            Čejkovice jsou Tramín a Rulandské modré (Pinot Noir). Výběr Tramínu
            a Rulandského modrého vycházel ze staletých zkušeností, kdy vína z
            těchto odrůd jsou díky klimatickým a půdním podmínkám Čejkovic
            naprosto specifická a vynikají svou kvalitou a dlouhověkostí.
          </p>
          <p>
            Výroba vín zařazených do systému TERROIR ČEJKOVICE se řídí přísným
            statutem pro pěstování a vinifikaci, tak aby mohla vznikat komplexní
            vína, která obstojí v čase. Terroirní vína potřebují čas, čas na
            zrání na sudu a čas na zrání na láhvi. Proto i při jeho vychutnávání
            nelze spěchat. Dejte těmto vínům vhodnou sklenici a prostor se
            projevit až do terciálních aromat a zážitek je potom opravdu
            jedinečný.
          </p>

          <Button className="btn--primary" onClick={handleClick}>
            Více o terroir
          </Button>
        </section>
      </div>
    </>
  );
};

export default Home;
