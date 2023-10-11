import React, { useState } from 'react';

const DateContainer = () => {
    const d = new Date();
    var offset = -300; //Timezone offset for EST in minutes.
    var estDate = new Date(d.getTime() + offset * 60 * 1000);
    const [time, setTime] = useState(estDate.toString());
    const [date, setDate] = useState(d.toString());

    return (
        <div>
            <br></br>
            <h2 fontFamily="fantasy">{date}</h2>
        </div>
    )
}

export default DateContainer;