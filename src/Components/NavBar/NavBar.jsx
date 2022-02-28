import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import './NavBar.css';
import { change_currentTab } from '../../Redux/tabSlice';

function NavBar() {
  const dispatch = useDispatch();
  const changeTab = (tab) => {
    console.log(tab);
    dispatch(change_currentTab(tab));
  };
  return (
    <Navbar expand='lg' className='navbar-main'>
      <Container>
        <Navbar.Brand className='me-5 pe-5 navbar-header'><h2>Inventory</h2></Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link onClick={() => changeTab('addProduct')}>Add Products</Nav.Link>
            <Nav.Link onClick={() => changeTab('removeProduct')}>Remove Products</Nav.Link>
            <Nav.Link onClick={() => changeTab('listProduct')}>List Products</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
