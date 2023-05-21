import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdownExample from './components/NavBar';
import Greeting from './components/ItemListContainer';

function App() {
  return (
      <header className="App-header row justify-content-start ml-3">
        <NavDropdownExample/>
        <Greeting saludo="Hola Mundo"/>
      </header>
  );
}

export default App;
