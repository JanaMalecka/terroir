import { FC } from 'react';

const Footer: FC = (): JSX.Element => {
  return (
    <footer className="container-footer">
      <div className="footer-section">
        <div>
          <div className="footer-subsection">
            <div className="mb-3 d-flex flex-column footer-left">
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

            <div className="mb-3 footer-right">
              <a
                href="https://www.vinozcejkovic.cz"
                target="_blank"
                rel="noreferrer"
                aria-label="Přejít na webové stránky vinozcejkovic.cz"
              >
                <div className="logo-terroir--light"></div>
              </a>
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
