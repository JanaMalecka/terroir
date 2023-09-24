import { FC } from 'react';

const Footer: FC = (): JSX.Element => {
  return (
    <footer className="container-footer">
      <div className="footer-section">
        <div>
          <p className="mb-3">
            Projekt Terroir Čejkovice vznikl pod patronací spolku Čtvrtečníci -
            sdružení vinařů Čejkovice, z.s. IČO: 27006832
          </p>

          <div className="footer-subsection">
            <div className="mb-3 d-flex flex-column">
              <div> Marie Novotná </div>
              <div>manažerka spolku </div>
              <a
                href="tel:+420776078678"
                className="link"
                aria-label="+ 420. 776. 078. 678."
              >
                +420 776 078 678
              </a>{' '}
              <div>
                <div className="mb-3 ">
                  <div>
                    <a
                      href="mailto:info@vinozcejkovic.cz"
                      className="link"
                      aria-label="email info@vinozcejkovic.cz"
                    >
                      info@vinozcejkovic.cz
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
                      www.vinozcejkovic.cz{' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <a
                href="https://www.vinozcejkovic.cz"
                target="_blank"
                rel="noreferrer"
                aria-label="Přejít na webové stránky vinozcejkovic.cz"
              >
                <div className="logo-vino-z-cejkovic"></div>
              </a>
              <div className="mb-3">
                <div className="d-flex justify-content-center">
                  <a
                    href="https://www.facebook.com/vinozcejkovic"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Přejít na Facebook spolku Víno z Čejkovic"
                  >
                    <div className="icon-facebook"></div>
                  </a>
                  <a
                    href="https://www.instagram.com/vinozcejkovic"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Přejít na Instagram spolku Víno z Čejkovic"
                  >
                    <div className="icon-instagram"></div>
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <div>Petr Bíza</div>
              <div>
                <div>manažer projektu</div>
                <div>
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
              </div>
            </div>
          </div>
          <div>2023 © Čtvrtečníci - sdružení vinařů Čejkovice</div>
          {/* <div>
        Používáním těchto webových stránek souhlasíte s použitím souborů
        cookies.
      </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
