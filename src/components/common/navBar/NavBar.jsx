import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import homeLogo from '../../../img/home.png'
import { CartWidget } from '../cartWidget/CartWidget';

function NavDropdownExample() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      <div className='imgHeader'>
        <Link to="/">
            <img src={ homeLogo } alt="" />
        </Link>
      </div>
      <NavDropdown title="Catálogo de productos" id="nav-dropdown">
        <NavDropdown.Item Key="4.1">
            <Link to="/herramientas"> Herramientas </Link>
        </NavDropdown.Item>
        <NavDropdown.Item Key="4.2">
            <Link to="/pinturas"> Pinturas </Link>
        </NavDropdown.Item>
        <NavDropdown.Item Key="4.3">
            <Link to="/materiales"> Materiales </Link>
        </NavDropdown.Item>
      </NavDropdown>
      <CartWidget />
    </Nav>
  );
}

export { NavDropdownExample }