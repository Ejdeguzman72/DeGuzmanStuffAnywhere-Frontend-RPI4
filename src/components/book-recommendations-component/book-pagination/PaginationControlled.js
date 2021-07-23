import React, { useState } from 'react';

const PaginationControlled = () => {

    const [page,setPage] = useState(1);
    const handlechange = (event,value) => {
        setPage(value);
    };


    return (
        <div>
            <Pagination count={10} page={page} onChange={handleChange} />
        </div>
    );
}