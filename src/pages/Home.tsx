import React, { FC } from 'react';
//import { LazyLoadImage } from 'react-lazy-load-image-component';
import vineyardWideLow from '../assets/images/vineyardWideLow.webp';
import FadeUp from '../features/Animate/FadeUp';
import ScaleIn from '../features/Animate/ScaleIn';
import Modal from '../components/Modal';

const Home: FC = (): JSX.Element => {
  return (
    <>
      <section className="container__content--mobile"></section>
      <div className="container__content">
        <h1>TERROIR ČEJKOVICE</h1>

        <p>
          První apelační systém, který ukazuje neopakovatelnou typičnost odrůd
          Tramín a Rulandské modré pěstovaných na jedinečných viničních tratích
          Čejkovic.{' '}
        </p>
      </div>

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
        <FadeUp from={{ opacity: 0 }} to={{ opacity: 1 }}>
          <h6 className="fw-bold mb-3">Cíl projektu Terroir Čejkovice je: </h6>
        </FadeUp>

        <FadeUp from={{ opacity: 0 }} to={{ opacity: 1 }}>
          <p className="mb-3">Zdůraznění jedinečnosti čejkovických vín.</p>
        </FadeUp>
        <FadeUp from={{ opacity: 0 }} to={{ opacity: 1 }}>
          <p className="mb-3">Zviditelnění odrůd typických pro Čejkovice.</p>
        </FadeUp>
        <FadeUp from={{ opacity: 0 }} to={{ opacity: 1 }}>
          <p className="mb-3">Důraz na vinifikaci a související kvalitu.</p>
        </FadeUp>
        <FadeUp from={{ opacity: 0 }} to={{ opacity: 1 }}>
          <p className="mb-3">
            Zachování historického odkazu pěstování hroznů v Čejkovicích.
          </p>
        </FadeUp>
        {/* 
        <ScaleIn from={{ scale: '0' }} to={{ scale: '1' }}>
          <Link to="/statut-terroir-cejkovice">
            {' '}
            <Button className="btn--primary">Více o terroir</Button>
          </Link>
        </ScaleIn> */}
      </div>

      <div className="container__content">
        <FadeUp from={{ opacity: 0 }} to={{ opacity: 1 }}>
          <h2>Statut Terroir Čejkovice</h2>
        </FadeUp>
        <FadeUp from={{ opacity: 0 }} to={{ opacity: 1 }}>
          <p>
            Označení Terroir Čejkovice je možné přiznávat pouze vínům vyrobených
            z odrůd:
          </p>
        </FadeUp>
        <ScaleIn from={{ scale: '0' }} to={{ scale: '1' }}>
          <p className="fw-bold"> Rulandské modré a Tramín.</p>
        </ScaleIn>
      </div>

      <div className="container__content light">
        <ul>
          <FadeUp from={{ opacity: 0 }} to={{ opacity: 1 }}>
            <li className="mb-3">
              {' '}
              Vína mohou být vyráběna pouze členy sdružení Čtvrtečníci -
              sdružení vinařů Čejkovice, z.s.
            </li>
          </FadeUp>
          <FadeUp from={{ opacity: 0 }} to={{ opacity: 1 }}>
            <li className="mb-3">
              Vína musí být vyráběna pouze z hroznů vypěstovaných na
              registrovaných vinicích v katastru obce Čejkovice s minimálním
              počtem 4.500 keřů na hektar. Hrozny musí být zdravé. Víno by mělo
              být ve větší míře formované vinohradem = terroir. Výnos u odrůdy
              Rulandské modré nesmí překročit 1,5 kg hroznů na keř a výnos u
              odrůdy Tramín nesmí překročit 2 kg hroznů na keř.
            </li>
          </FadeUp>

          <FadeUp from={{ opacity: 0 }} to={{ opacity: 1 }}>
            <li className="mb-3">
              Hrozny musí být zpracovány bez exogenních enzymů a jiných
              maceračních přídavných látek. Důležitá je minimalizace síření při
              výrobě vína. U odrůdy Rulandské modré je povolena maximální
              hranice do 100 mg/l veškerého SO 2 . U odrůdy Tramín je povolena
              maximální hranice do 120 mg/l veškerého SO 2. Není povolen
              přídavek kyseliny askorbové.
            </li>
          </FadeUp>
          <FadeUp from={{ opacity: 0 }} to={{ opacity: 1 }}>
            <li className="mb-3">
              Vína lze vyrábět pouze z hroznů révy vinné odpovídajících
              kvalitativnímu zařazení: víno s přívlastkem pozdní sběr a víno s
              přívlastkem výběr z hroznů. Obsah alkoholu ve vínech musí být
              minimálně 12,5 % obj.. Vína by měla být plná a extraktivní a musí
              vykazovat typické senzorické vlastnosti dané odrůdy.
            </li>
          </FadeUp>

          <FadeUp from={{ opacity: 0 }} to={{ opacity: 1 }}>
            <li className="mb-3">
              Vína musí být plněna do skleněných lahví o obsahu 0,75 l nebo 1,5
              l. Do degustační komise mohou být přihlášena pouze nalahvovaná
              vína. Prodej vín je povolen od 1. 5. každého kalendářního roku při
              splnění minimálních dob zrání vín. Po schválení vína degustační
              komisí budou láhve označovány kolkem Terroir Čejkovice nalepeným
              kolem hrdla lahve.
            </li>
          </FadeUp>
          <FadeUp from={{ opacity: 0 }} to={{ opacity: 1 }}>
            <li className="mb-3">
              Degustace probíhá minimálně jednou ročně. Degustační komise je
              složena ze členů spolku Čtvrtečníci - sdružení vinařů Čejkovice,
              z.s. a pracuje v minimálním počtu 11 osob.
            </li>
          </FadeUp>

          <FadeUp from={{ opacity: 0 }} to={{ opacity: 1 }}>
            <li className="mb-3">
              Degustační komise hodnotí vína body a také o vínech hlasuje. Víno
              je hodnoceno stobodovým systémem mezinárodní unie enologů, ale
              hodnotí se pouze body „po pěti“ např.: 85, 90, 95 a 100. Minimální
              bodové ohodnocení pro zařazení do Terroir Čejkovice je 85 bodů.
              Pokud je vínu uděleno méně jak 80 bodů musí být napsáno
              odůvodnění. Dále je o víně hlasováno, přičemž pro zařazení do
              Terroir Čejkovice je nutný souhlas 2/3 hodnotících členů
              degustační komise.
            </li>
          </FadeUp>
        </ul>

        <div>
          <ScaleIn from={{ scale: '0' }} to={{ scale: '1' }}>
            <button
              type="button"
              className="btn--primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Více o terroir
            </button>
          </ScaleIn>

          <div
            className="modal fade"
            id="exampleModal"
            /*  tabindex="-1" */
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header modal-separator--color d-flex flex-column">
                  <h2 className="pt-3">Statut TERROIR ČEJKOVICE</h2>
                </div>
                <Modal />
                <div className="modal-footer modal-separator--color">
                  <button
                    type="button"
                    className="btn--secondary"
                    data-bs-dismiss="modal"
                  >
                    Zavřít
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
