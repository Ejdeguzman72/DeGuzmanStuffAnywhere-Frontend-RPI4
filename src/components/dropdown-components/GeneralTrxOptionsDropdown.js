import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function GeneralTrxOptionsDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="info" id="dropdown-basic" size="lg">
        More Options
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Table View</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Grid View</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Search By User</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Search By Type</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default GeneralTrxOptionsDropdown;