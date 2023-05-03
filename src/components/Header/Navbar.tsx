import { useState } from 'react';
import Home from '../../pages/Home';
import Winemakers from '../../pages/Winemakers';
import Link from './Link';
import Wines from '../../pages/Wines';
import NavigationContext from '../../context/navigation';
import Route from './Route';
import { MenuOutlined, Close } from '@mui/icons-material';

const Navbar = () => {
  const [active, setActive] = useState(false);

  const showMenu = () => {
    setActive(!active);
  };

  const links = [
    { label: 'TERROIR', path: '/' },
    { label: 'NAŠI VINAŘI', path: '/vinari' },
    { label: 'NAŠE VÍNA', path: '/vina' },
    { label: 'ODRŮDY', path: '/odrudy' },
    { label: 'NAŠE VINICE V MAPĚ', path: '/vinice' },
    { label: 'KONTAKT', path: '/kontakt' },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link key={link.label} to={link.path} activeClassName="fw-bold">
        {link.label}
      </Link>
    );
  });

  return (
    <div className="navbar-responsive">
      <div className={!active ? 'menu-icon' : 'menu-icon-none'}>
        <MenuOutlined className="menu" onClick={showMenu} />
      </div>
      <div className={active ? 'navbar-slider active ' : 'navbar-slider'}>
        <div className="menu-closed">
          <Close className="close" onClick={showMenu} />
        </div>

        <div className="navbar-links">{renderedLinks}</div>
      </div>
    </div>
  );
};

export default Navbar;

/* import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container navbar__hero">
        <div className="navbar__hero-overlay">
          <a className="navbar-brand navbar-brand--position" href="#">
            TERROIR ČEJKOVICE
          </a>
          <nav className="navbar navbar-expand-lg navbar__hero--items">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarNavAltMarkup"
              >
                <div className="navbar-nav">
                  <a className="nav-link" aria-current="page" href="#intro">
                    TERROIR
                  </a>
                  <a className="nav-link" href="#winemakers">
                    NAŠI VINAŘI
                  </a>
                  <a className="nav-link" href="#wines">
                    NAŠE VÍNA
                  </a>
                  <a className="nav-link" href="#vineyards">
                    NAŠE VINICE V MAPĚ
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar; */
