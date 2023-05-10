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
    { label: 'ODRŮDY', path: '/odrudy' },
    { label: 'ZATŘÍDĚNÁ VÍNA', path: '/zatridena-vina' },
    { label: 'STATUT TERROIR ČEJKOVICE', path: '/statut-terroir-cejkovice' },
    { label: 'VINIČNÍ TRATĚ ČEJKOVICE', path: '/vinicni-trate-cejkovice' },
    { label: 'ČLENSKÁ VINAŘSTVÍ', path: '/clenska-vinarstvi' },
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
