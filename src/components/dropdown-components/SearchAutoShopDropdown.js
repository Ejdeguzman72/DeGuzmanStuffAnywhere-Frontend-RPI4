import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function AutoShopOptionsDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="info" id="dropdown-basic" size="lg">
        More Options
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/auto-shops">Table View</Dropdown.Item>
        <Dropdown.Item href="#/auto-shop-grid-page">Grid View</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Search By Name</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Search By Zip</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default AutoShopOptionsDropdown;