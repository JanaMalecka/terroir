import React, { FC } from 'react';
import Modal from '../components/Modal';
import FadeUp from '../features/Animate/FadeUp';
import ScaleIn from '../features/Animate/ScaleIn';

const Statute: FC = (): JSX.Element => {
  return (
    <>
      <section className="container--dark">
        <div className="container__content">
          <h1>STATUT TERROIR ČEJKOVICE</h1>
          <p>
            Označení Terroir Čejkovice je možné přiznávat pouze vínům vyrobených
            z odrůd:
          </p>

          <p className="fw-bold"> Rulandské modré a Tramín.</p>
        </div>
        <div className="container__content light">
          <FadeUp from={{ opacity: 0 }} to={{ opacity: 1 }}>
            <p className="mb-3">
              {' '}
              Vína mohou být vyráběna pouze členy sdružení Čtvrtečníci -
              sdružení vinařů Čejkovice, z.s.
            </p>
          </FadeUp>
          <FadeUp from={{ opacity: 0 }} to={{ opacity: 1 }}>
            <p className="mb-3">
              Vína musí být vyráběna pouze z hroznů vypěstovaných na
              registrovaných vinicích v katastru obce Čejkovice s minimálním
              počtem 4.500 keřů na hektar. Hrozny musí být zdravé. Víno by mělo
              být ve větší míře formované vinohradem = terroir. Výnos u odrůdy
              Rulandské modré nesmí překročit 1,5 kg hroznů na keř a výnos u
              odrůdy Tramín nesmí překročit 2 kg hroznů na keř.
            </p>
          </FadeUp>

          <FadeUp from={{ opacity: 0 }} to={{ opacity: 1 }}>
            <p className="mb-3">
              Hrozny musí být zpracovány bez exogenních enzymů a jiných
              maceračních přídavných látek. Důležitá je minimalizace síření při
              výrobě vína. U odrůdy Rulandské modré je povolena maximální
              hranice do 100 mg/l veškerého SO 2 . U odrůdy Tramín je povolena
              maximální hranice do 120 mg/l veškerého SO 2. Není povolen
              přídavek kyseliny askorbové.
            </p>
          </FadeUp>
          <FadeUp from={{ opacity: 0 }} to={{ opacity: 1 }}>
            <p>
              Vína lze vyrábět pouze z hroznů révy vinné odpovídajících
              kvalitativnímu zařazení: víno s přívlastkem pozdní sběr a víno s
              přívlastkem výběr z hroznů. Obsah alkoholu ve vínech musí být
              minimálně 12,5 % obj.. Vína by měla být plná a extraktivní a musí
              vykazovat typické senzorické vlastnosti dané odrůdy.
            </p>
          </FadeUp>

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
      </section>
    </>
  );
};

export default Statute;
