import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
import Form from 'react-bootstrap/Form'

function DropSearch(props) {

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home">Banks</Navbar.Brand>
      <Form.Control style={{ width: '100px' }} as="select"
        onChange={(e) => props.handleChange(e.target.value.toUpperCase())}>
        <option>Select City</option>
        <option>Mumbai</option>
        <option>Pune</option>
        <option>Bangalore</option>
        <option>Chennai</option>
      </Form.Control>

    </Navbar>
  );
}

export default DropSearch;