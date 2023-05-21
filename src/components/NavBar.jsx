import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';

function NavDropdownExample() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      <NavDropdown title="Catálogo de productos" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Herramientas</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Pinturas action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Ferretería</NavDropdown.Item>
      </NavDropdown>
      <CartWidget/>
    </Nav>
  );
}

// render(<NavDropdownExample />);
export default NavDropdownExample;