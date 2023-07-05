import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './pages/home';
import { ItemListConteiner } from './components/containers/itemListConteiner';
import { Item } from './components/containers/itemDetailContainer';
import { CartListContainer } from './components/containers/cartListContainer';
import { CartCounterProvider } from './context/cartCounter';
import { HeaderComponent } from './pages/header';
import { FooterComponent } from './pages/footer';
import { app } from './services/firebase/firebase'

function App() {
  
  return (
    <>
      <CartCounterProvider>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/item/:id' element={<Item />} />
            <Route path='/:category' element={<ItemListConteiner />} />
            <Route path='/cart' element={<CartListContainer />} />
          </Routes>
        </BrowserRouter>
        <FooterComponent />
      </CartCounterProvider>
    </>
  );
}

export default App;
