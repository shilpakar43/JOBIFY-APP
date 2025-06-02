import React from 'react'
import { useState } from 'react';
import { Button, Offcanvas, Navbar, Nav, Col, Stack, Container, Row } from 'react-bootstrap';
import './menu.css'
import { useNavigate } from 'react-router';

const Menucomponent = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  return (
    <div className='homepage bg-white rounded-xl p-4 w-full max-w-md mx-auto'>
      <Row>
        <Col>
          <div className='menubtn' >
            <Button variant="primary" onClick={handleShow} className='mbtn ' style={{ fontSize: "3rem" }}>
              <i className="bi bi-list" style={{ pointerEvents: 'none' }}></i>
            </Button>
            <Offcanvas show={show} onHide={handleClose} className='sidebar'>
              <Offcanvas.Body>
                <Button type='submit' onClick={handleClose}> {'<'} </Button>
                <Navbar expand="lg" className='d-flex justify-content align-item'>
                  <Stack gap={3} className='text-center'>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About_Us</Nav.Link>
                    <Nav.Link href="#services">Services</Nav.Link>
                    <Nav.Link href="#help">Help</Nav.Link>
                    <Nav.Link href="#contact">Contact_Us</Nav.Link>
                  </Stack>
                </Navbar>

              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </Col>
        <Col >
          <div className='profile mt-4'>
            <h1>
              {/* <Navbar.Brand role="button" >Profile</Navbar.Brand> */}   {/* replace with search bar */}
            </h1>
          </div>
        </Col>
        <Col>

        </Col>
      </Row>

    </div >
  )
}

export default Menucomponent