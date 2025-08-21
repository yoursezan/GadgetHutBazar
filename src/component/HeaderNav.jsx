import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
 
import { FaSearch, FaShoppingCart } from 'react-icons/fa';



export default function HeaderNav() {
  return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        
        <Navbar.Brand href="/home">GadgetHutBazar</Navbar.Brand>

         
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          
          <Nav className="align-items-center">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="/products">Product</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <NavDropdown
              title={<FaShoppingCart size={20} />}  
              id="cart-nav-dropdown"
              align="end"
            >
              <NavDropdown.Item href="#action/3.1">
                <FaShoppingCart className="me-2" /> Cart
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Right-side Search Form */}
          <Form className="d-flex">
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Search..."
                aria-label="Search"
              />
              <Button variant="outline-secondary">
                <FaSearch />
              </Button>
            </InputGroup>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
