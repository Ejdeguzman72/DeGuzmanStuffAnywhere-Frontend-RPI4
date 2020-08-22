import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const PaginationComponent = () => {
    return (
        <div className="App">
            <Pagination size="lg"> 
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                {/* <Pagination.Ellipsis /> */}
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                {/* <Pagination.Item active>{12}</Pagination.Item> */}
                {/* <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item> */}
                {/* <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item> */}
                <Pagination.Next />
            </Pagination>
        </div>
    )
}

export default PaginationComponent;