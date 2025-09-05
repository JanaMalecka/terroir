import { FC } from 'react';

const Footer: FC = (): JSX.Element => {
  return (
    <footer className="container-footer">
      <div className="footer-section">
        <div className="footer-subsection">
          {/* Left logo */}
          <div className="footer-left">
            <a
              href="https://www.vinozcejkovic.cz"
              target="_blank"
              rel="noreferrer"
              aria-label="Přejít na webové stránky vinozcejkovic.cz"
            >
              <div className="logo-vino-z-cejkovic"></div>
            </a>
          </div>

          {/* Social icons */}
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

          {/* Right logo */}
          <div className="footer-right">
            <a
              href="https://www.terroircejkovice.cz"
              target="_blank"
              rel="noreferrer"
              aria-label="Přejít na webové stránky terroircejkovice.cz"
            >
              <div className="logo-terroir--light"></div>
            </a>
          </div>
        </div>

        {/* Footer text */}
        <div>© 2023 - 2025 Čtvrtečníci - sdružení vinařů Čejkovice</div>
      </div>
    </footer>
  );
};

export default Footer;
