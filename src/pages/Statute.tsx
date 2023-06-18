import React, { FC } from 'react';
import Modal from '../components/Modal';

const Statute: FC = (): JSX.Element => {
  return (
    <>
      <div className="container__content">
        <h1>TERROIR</h1>
        <h2>ČEJKOVICE</h2>
        <p>
          Označení Terroir Čejkovice je možné přiznávat pouze vínům vyrobených z
          odrůd:
        </p>

        <p className="fw-bold"> Rulandské modré a Tramín.</p>
      </div>
      <div className="container__content light">
        <ul>
          <li className="mb-3">
            {' '}
            Vína mohou být vyráběna pouze členy sdružení Čtvrtečníci - sdružení
            vinařů Čejkovice, z.s.
          </li>

          <li className="mb-3">
            Vína musí být vyráběna pouze z hroznů vypěstovaných na
            registrovaných vinicích v katastru obce Čejkovice s minimálním
            počtem 4.500 keřů na hektar. Hrozny musí být zdravé. Víno by mělo
            být ve větší míře formované vinohradem = terroir. Výnos u odrůdy
            Rulandské modré nesmí překročit 1,5 kg hroznů na keř a výnos u
            odrůdy Tramín nesmí překročit 2 kg hroznů na keř.
          </li>

          <li className="mb-3">
            Hrozny musí být zpracovány bez exogenních enzymů a jiných
            maceračních přídavných látek. Důležitá je minimalizace síření při
            výrobě vína. U odrůdy Rulandské modré je povolena maximální hranice
            do 100 mg/l veškerého SO 2 . U odrůdy Tramín je povolena maximální
            hranice do 120 mg/l veškerého SO 2. Není povolen přídavek kyseliny
            askorbové.
          </li>

          <li>
            Vína lze vyrábět pouze z hroznů révy vinné odpovídajících
            kvalitativnímu zařazení: víno s přívlastkem pozdní sběr a víno s
            přívlastkem výběr z hroznů. Obsah alkoholu ve vínech musí být
            minimálně 12,5 % obj.. Vína by měla být plná a extraktivní a musí
            vykazovat typické senzorické vlastnosti dané odrůdy.
          </li>

          <li className="mb-3">
            Vína musí být plněna do skleněných lahví o obsahu 0,75 l nebo 1,5 l.
            Do degustační komise mohou být přihlášena pouze nalahvovaná vína.
            Prodej vín je povolen od 1. 5. každého kalendářního roku při splnění
            minimálních dob zrání vín. Po schválení vína degustační komisí budou
            láhve označovány kolkem Terroir Čejkovice nalepeným kolem hrdla
            lahve.
          </li>

          <li className="mb-3">
            Degustace probíhá minimálně jednou ročně. Degustační komise je
            složena ze členů spolku Čtvrtečníci - sdružení vinařů Čejkovice,
            z.s. a pracuje v minimálním počtu 11 osob.
          </li>

          <li className="mb-3">
            Degustační komise hodnotí vína body a také o vínech hlasuje. Víno je
            hodnoceno stobodovým systémem mezinárodní unie enologů, ale hodnotí
            se pouze body „po pěti“ např.: 85, 90, 95 a 100. Minimální bodové
            ohodnocení pro zařazení do Terroir Čejkovice je 85 bodů. Pokud je
            vínu uděleno méně jak 80 bodů musí být napsáno odůvodnění. Dále je o
            víně hlasováno, přičemž pro zařazení do Terroir Čejkovice je nutný
            souhlas 2/3 hodnotících členů degustační komise.
          </li>
        </ul>

        <div>
          <button
            type="button"
            className="btn--primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Více o terroir
          </button>

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
                  <h1>TERROIR</h1>
                  <h2>ČEJKOVICE</h2>
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

export default Statute;
