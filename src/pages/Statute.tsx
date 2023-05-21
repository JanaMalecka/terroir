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
        <p> Rulandské modré a Tramín.</p>
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
