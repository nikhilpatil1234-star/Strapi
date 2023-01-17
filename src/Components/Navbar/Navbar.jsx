import React from 'react'
import "./navbar.scss"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from "../../assests/logo1.svg"


const Navbarr = () => {
  return (
    <div className='navbarconatiner container-fluid'> 
        <>
      {[ 'lg',].map((expand) => (
        <Navbar key={expand} bg="none" expand={expand} className="mb-3">
          <Container className='navbarcontainerlogo'>
          <img src={logo} alt="" />
            <Navbar.Brand href="#">
              </Navbar.Brand>
            
            <Navbar.Toggle className='navbar-toggler' aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Products
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className=" navbarconatinerlist justify-content-center ">
                  <Nav.Link href="#action1">Product</Nav.Link>
                  <Nav.Link href="#action1">Solutions</Nav.Link>
                  <Nav.Link href="#action1">Resources</Nav.Link>
                  <Nav.Link href="#action1">Community</Nav.Link>
                  <Nav.Link href="#action2">Pricing</Nav.Link>
                  <Nav.Link href="#action2">Cloud</Nav.Link>
                </Nav>
                <Form className="d-flex">
                <Button  className='navbarcontainerbutton' size="lg">
          Get started
        </Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
        
        </div>
  )
}

export default Navbarr