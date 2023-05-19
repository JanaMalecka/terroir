const Footer = (): JSX.Element => {
  return (
    <>
      <footer className="container-footer">
        <div className="mb-3">
          Projekt Terroir Čejkovice vznikl pod patronací spolku Čtvrtečníci -
          sdružení vinařů Čejkovice, z.s. IČO: 27006832
        </div>
        <div className="mb-3">
          <div>Kontaktní osoba:</div>
          <div> Mgr. Marie Novotná </div>
          <div>
            manažerka spolku{' '}
            <a href="tel:+420776078678" className="link">
              +420 776 078 678
            </a>{' '}
          </div>
        </div>
        <div className="d-flex">
          <div className="mb-3 d-flex flex-column">
            <a href="mailto:info@vinozcejkovic.cz" className="link">
              info@vinozcejkovic.cz
            </a>
            <a href="https://www.vinozcejkovic.cz" className="link">
              {' '}
              https://www.vinozcejkovic.cz{' '}
            </a>
          </div>
          <div className="logo-vino-z-cejkovic"></div>
        </div>
        <div className="mb-3">
          <div>Ing. Petr Bíza</div>
          <div>
            {' '}
            manažer projektu Terroir Čejkovice{' '}
            <a href="tel:+420776120439" className="link">
              +420 776 120 439
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
