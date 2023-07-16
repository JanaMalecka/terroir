import React, { FC } from 'react';

const Contacts: FC = (): JSX.Element => {
  return (
    <>
      <div className="container__content bg-white text-dark">
        <h1>KONTAKT</h1>
        <p className="mb-3">
          Projekt Terroir Čejkovice vznikl pod patronací spolku Čtvrtečníci -
          sdružení vinařů Čejkovice, z.s. IČO: 27006832
        </p>
        <div className="mb-3">
          <p>Kontaktní osoba:</p>
          <div> Mgr. Marie Novotná </div>
          <div>manažerka spolku</div>

          <div className="mb-3 mt-3 d-flex flex-column">
            <a
              href="tel:+420776078678"
              className="link-dark"
              aria-label="+ 420. 776. 078. 678."
            >
              +420 776 078 678
            </a>

            <a
              href="mailto:info@vinozcejkovic.cz"
              className="link-dark"
              aria-label="email info@vinozcejkovic.cz"
            >
              info@vinozcejkovic.cz
            </a>
            <a
              href="https://www.vinozcejkovic.cz"
              className="link-dark"
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
            <div className="logo-vino-z-cejkovic"></div>
          </a>
        </div>

        <div className="mb-3">
          <div>Ing. Petr Bíza</div>
          <div>
            <div>manažer projektu</div>
            <div className="mt-3">
              <a
                href="tel:+420776120439"
                className="link-dark"
                aria-label="+ 420. 776. 120. 439."
              >
                +420 776 120 439
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
