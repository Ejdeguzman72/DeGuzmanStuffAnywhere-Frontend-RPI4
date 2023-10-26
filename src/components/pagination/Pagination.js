import React from 'react';
import { Button } from 'react-bootstrap';

const PaginationComponent = ({ itemsPerPage, totalItems, currentPage, onPageChange }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
            <Button variant="info" size="lg" onClick={() => onPageChange(number)} className="page-link">
              {number}
            </Button>
          </li>
        ))}
      </ul>
    );
  };

  export default PaginationComponent;