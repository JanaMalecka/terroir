import Logo from './Logo';
import Navbar from './Navbar';
import Home from '../../pages/Home';
import Winemakers from '../../pages/Winemakers';
import Route from './Route';
import Wines from '../../pages/Wines';
import Vineyards from '../../pages/Vineyards';
import Varieties from '../../pages/Varieties';
import Contacts from '../../pages/Contacts';

const Header = () => {
  return (
    <>
      <div className="container__navigation navbar__hero">
        <Logo />
        <Navbar />
      </div>
      <Route path="/vinari">
        <Winemakers />
      </Route>
      <Route path="/vina">
        <Wines />
      </Route>
      <Route path="/odrudy">
        <Varieties />
      </Route>
      <Route path="/vinice">
        <Vineyards />
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
