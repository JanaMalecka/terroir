import React, { FC, useState } from 'react';
import { MenuOutlined, Close } from '@mui/icons-material';
import Link from './Link';

interface LinkItem {
  label: string;
  path: string;
}

const Navbar: FC = () => {
  const [active, setActive] = useState<boolean>(false);

  const showMenu = () => {
    setActive(!active);
  };

  const links: LinkItem[] = [
    { label: 'TERROIR', path: '/' },
    { label: 'NAŠI VINAŘI', path: '/vinari' },
    { label: 'NAŠE VÍNA', path: '/vina' },
    { label: 'ODRŮDY', path: '/odrudy' },
    { label: 'NAŠE VINICE V MAPĚ', path: '/vinice' },
    { label: 'KONTAKT', path: '/kontakt' },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        activeClassName="fw-bold"
        className="navbar-link"
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div className="navbar-responsive">
      <div className={!active ? 'menu-icon' : 'menu-icon--none'}>
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
