import { FC } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import Home from '../../pages/Home';
import Wineries from '../../pages/Wineries';
import Route from './Route';
import Wines from '../../pages/Wines';
import Vineyards from '../../pages/Vineyards';
import Varieties from '../../pages/Varieties';
import Contacts from '../../pages/Contacts';
import Statute from '../../pages/Statute';

const Header: FC = () => {
  return (
    <>
      <div className="container__navigation hero">
        <Logo />
        <Navbar />
      </div>

      <Route path="/odrudy">
        <Varieties />
      </Route>
      <Route path="/zatridena-vina">
        <Wines />
      </Route>
      <Route path="/statut-terroir-cejkovice">
        <Statute />
      </Route>
      <Route path="/vinicni-trate-cejkovice">
        <Vineyards />
      </Route>
      <Route path="/clenska-vinarstvi">
        <Wineries />
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
