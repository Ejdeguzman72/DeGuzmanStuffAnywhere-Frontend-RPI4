import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function MedicalOfficeOptionsDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="info" id="dropdown-basic" size="lg">
        More Options
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/medical-office-table">Table View</Dropdown.Item>
        <Dropdown.Item href="#/medical-office-grid">Grid View</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Search By Zipcode</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default MedicalOfficeOptionsDropdown;