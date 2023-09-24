import React, { FC } from 'react';
import photowinemakers from '../assets/images/spolecna.jpg';

const Contacts: FC = (): JSX.Element => {
  return (
    <>
      <section className="container--dark">
        <div className="container__content container-content--columns">
          <h1>KONTAKT</h1>
          <div className="contact-section">
            <div className="contact-photo d-flex justify-content-center">
              <img
                alt="Foto členů spolku"
                src={photowinemakers}
                className="photo-style"
                loading="lazy"
              />
            </div>

            <div className="pd-3 contact-info">
              <div>
                <p className="mb-3">
                  Projekt Terroir Čejkovice vznikl pod patronací spolku
                  Čtvrtečníci - sdružení vinařů Čejkovice, z.s.{' '}
                </p>
                <p className="mb-3"> IČO: 27006832</p>
              </div>
              <div className="contact-subsection">
                <div className="mb-3 p-3">
                  <div> Marie Novotná </div>
                  <div>manažerka spolku</div>

                  <div className="mb-3 mt-3 d-flex flex-column">
                    <a
                      href="tel:+420776078678"
                      className="link"
                      aria-label="+ 420. 776. 078. 678."
                    >
                      +420 776 078 678
                    </a>

                    <a
                      href="mailto:info@vinozcejkovic.cz"
                      className="link"
                      aria-label="email info@vinozcejkovic.cz"
                    >
                      info@vinozcejkovic.cz
                    </a>
                    <a
                      href="https://www.vinozcejkovic.cz"
                      className="link"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Přejít na webové stránky vinozcejkovic.cz"
                    >
                      {' '}
                      www.vinozcejkovic.cz{' '}
                    </a>
                  </div>
                  <a
                    href="https://www.vinozcejkovic.cz"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Přejít na webové stránky vinozcejkovic.cz"
                  >
                    <div className="contact-logo-vino-z-cejkovic"></div>
                  </a>
                </div>

                <div className="mb-3 p-3">
                  <div>Petr Bíza</div>
                  <div>
                    <div>manažer projektu</div>
                    <div className="mt-3">
                      <a
                        href="tel:+420776120439"
                        className="link"
                        aria-label="+ 420. 776. 120. 439."
                      >
                        +420 776 120 439
                      </a>
                    </div>
                    <div>
                      <a
                        href="mailto:bizavino@bizavino.cz"
                        className="link"
                        aria-label="email bizavino@bizavino.cz"
                      >
                        bizavino@bizavino.cz
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://www.vinozcejkovic.cz"
                        className="link"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Přejít na webové stránky vinozcejkovic.cz"
                      >
                        {' '}
                        www.terroircejkovice.cz{' '}
                      </a>
                    </div>
                    <a
                      href="https://www.vinozcejkovic.cz"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Přejít na webové stránky vinozcejkovic.cz"
                    >
                      <div className="contact-logo-terroir"></div>
                    </a>
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

export default Contacts;
