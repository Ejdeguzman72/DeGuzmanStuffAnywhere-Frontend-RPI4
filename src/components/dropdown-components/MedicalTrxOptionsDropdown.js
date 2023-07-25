import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function MedicalTrxOptionsDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="info" id="dropdown-basic" size="lg">
        More Options
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/medical-finance-table">Table View</Dropdown.Item>
        <Dropdown.Item href="#/medical-finance-grid">Grid View</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Search By Facility</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Search By Type</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Search By User</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default MedicalTrxOptionsDropdown;