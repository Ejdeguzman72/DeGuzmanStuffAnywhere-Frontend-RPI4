import React from 'react';

const DateContainer = () => {
    return (
        <p>{new Date().toDateString()}</p>
    )
}

export default DateContainer;