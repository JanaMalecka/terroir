import './style.scss';
import Home from './pages/Home';
import Header from './components/Header';
import Winemakers from './pages/Winemakers';
import NavigationContext from './context/navigation';
import Route from './components/Header/Route';
import Navbar from './components/Header/Navbar';
import Wines from './pages/Wines';
import Vineyards from './pages/Vineyards';
import Varieties from './pages/Varieties';
import Contacts from './pages/Contacts';
import Logo from './components/Header/Logo';

function App() {
  return (
    <>
      <Header />
    </>
  );
}

export default App;
