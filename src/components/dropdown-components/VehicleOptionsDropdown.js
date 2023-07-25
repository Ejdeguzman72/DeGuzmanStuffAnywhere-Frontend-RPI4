import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function VehicleOptionsDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="info" id="dropdown-basic" size="lg">
        More Options
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#//view-cars-table">Table View</Dropdown.Item>
        <Dropdown.Item href="#/view-cars-grid">Grid View</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Search By Make</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Search By Model</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Search By Year</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default VehicleOptionsDropdown;