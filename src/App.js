import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './pages/home';
import NavDropdownExample from './components/NavBar';
import { Item } from './components/itemDetailContainer';
import { ItemListConteiner } from './components/itemListConteiner';


function App() {
  
  return (
    <>
      <BrowserRouter>
      <header className="App-header row justify-content-start ml-3">
        <NavDropdownExample/>
      </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/item/:id' element={<Item />} />
          <Route path='/:category' element={<ItemListConteiner />} />
        </Routes>
      </BrowserRouter>
      <footer>
        <h4>
          TODOS LOS DERECHOS RESERVADOS FACUNDO VILLAR 
        </h4>
      </footer>
    </>
  );
}

export default App;
