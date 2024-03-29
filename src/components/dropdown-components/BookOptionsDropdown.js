import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function BookOptionsDropdown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="info" id="dropdown-basic" size="lg">
        More Options
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/book-recommendations-grid">Grid View</Dropdown.Item>
        <Dropdown.Item href="#/action-1">Search By Author</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Search By Title</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Search By Genre</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BookOptionsDropdown;