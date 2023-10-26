import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function CardioOptionsDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="info" id="dropdown-basic" size="lg">
        More Options
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/run-tracker-table">Table View</Dropdown.Item>
        <Dropdown.Item href="#/run-tracker-grid">Grid View</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Search By User</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default CardioOptionsDropdown;