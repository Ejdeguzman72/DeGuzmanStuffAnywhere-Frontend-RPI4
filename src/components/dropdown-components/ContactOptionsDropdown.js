import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function ContactOptionsDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="info" id="dropdown-basic" size="lg">
        More Options
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Table View</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Grid View</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Search By Last Name</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Search By Email</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Search By Phone</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ContactOptionsDropdown;