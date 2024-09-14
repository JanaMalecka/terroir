import React, { FC, useState } from 'react';
import { MenuOutlined, Close } from '@mui/icons-material';
import Link from './NavigationLink';

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
    { label: 'ODRŮDY', path: '/odrudy' },
    { label: 'ZATŘÍDĚNÁ VÍNA', path: '/zatridena-vina' },
    { label: 'ČLENSKÁ VINAŘSTVÍ', path: '/clenska-vinarstvi' },
    { label: 'MAPA TERROIR ČEJKOVICE', path: '/mapa-terroir-cejkovice' },
    { label: 'STATUT TERROIR ČEJKOVICE', path: '/statut-terroir-cejkovice' },
    { label: 'KONTAKT', path: '/kontakt' },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link
        key={link.label}
        to={link.path}
        activeClassName="fw-medium"
        className="navbar-link"
      >
        {link.label}
      </Link>
    );
  });

  return (
    <div>
      <div className={!active ? 'menu-icon' : 'menu-icon--none'}>
        <MenuOutlined className="menu" onClick={showMenu} />
      </div>
      <div className={active ? 'navbar-slider active ' : 'navbar-slider'}>
        <div className="menu-closed">
          <Close className="close" onClick={showMenu} />
        </div>

        <div className="navbar-links" onClick={showMenu}>
          {renderedLinks}
          <a
            href="https://661362.myshoptet.com/vino/"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-link"
          >
            E-SHOP
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
