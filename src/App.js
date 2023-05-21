import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdownExample from './components/NavBar';
import CartWidget from './components/CartWidget';

function App() {
  return (
      <header className="App-header row justify-content-start ml-3">
        <NavDropdownExample/>
        <CartWidget/>
      </header>
  );
}

export default App;
