import { FC, useState, useEffect } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import Home from '../../pages/Home';
import Wineries from '../../pages/Wineries';
import Route from './Route';
import Wines from '../../pages/Wines';
import Map from '../../pages/Map';
import Varieties from '../../pages/Varieties';
import Contacts from '../../pages/Contacts';
import Statute from '../../pages/Statute';

const Header: FC = () => {
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible =
        prevScrollpos > currentScrollPos || currentScrollPos < 100;
      setShow(isVisible);
      prevScrollpos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={
          show
            ? 'container__navigation hero navbar--scrolly'
            : 'container__navigation hero hidden'
        }
      >
        <Logo />
        <Navbar />
      </div>

      <Route path="/odrudy">
        <Varieties />
      </Route>
      <Route path="/zatridena-vina">
        <Wines />
      </Route>
      <Route path="/clenska-vinarstvi">
        <Wineries />
      </Route>
      <Route path="/mapa-terroir-cejkovice">
        <Map />
      </Route>
      <Route path="/statut-terroir-cejkovice">
        <Statute />
      </Route>
      <Route path="/kontakt">
        <Contacts />
      </Route>

      <Route path="/">
        <Home />
      </Route>
    </>
  );
};

export default Header;
