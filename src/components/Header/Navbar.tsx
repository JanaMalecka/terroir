import { useState } from 'react';
import Link from './Link';
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

        <div className="navbar-links" onClick={showMenu}>
          {renderedLinks}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
