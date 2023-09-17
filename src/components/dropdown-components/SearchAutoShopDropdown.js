import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function AutoShopOptionsDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="info" id="dropdown-basic" size="lg">
        More Options
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/auto-shops-table">Table View</Dropdown.Item>
        <Dropdown.Item href="#/auto-shops-grid">Grid View</Dropdown.Item>
        <Dropdown.Item href="#/search-auto-shop">Search Shops</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default AutoShopOptionsDropdown;