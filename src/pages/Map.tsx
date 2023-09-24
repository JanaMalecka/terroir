import React, { FC } from 'react';
import map from '../assets/images/map.webp';
import ScaleIn from '../features/Animate/ScaleIn';
import Modal from '../components/Modal';

const Map: FC = (): JSX.Element => {
  return (
    <>
      <section className="container--dark">
        <div className="container__content"></div>
        <div className="mt-5">
          <img
            alt="Foto vinice"
            src={map}
            className="img-style mb-5"
            loading="lazy"
          />
        </div>
        <div className="container__content">
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

export default Map;
