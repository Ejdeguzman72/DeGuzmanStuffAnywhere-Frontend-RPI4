import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const CarDropdown = () => {
    const [items, setItems] = useState({
        data: [
            {
                carid: 0,
                make: "",
                model: "",
                year: "",
                capacity: 0,
                transmission: ""
            }
        ]
    });

    const handleInputChange = (event) => {
        setItems(event.target.value)
        console.log(event.target.value)
    }

    useEffect(() => {
        Axios.get('http://localhost:8080/app/cars/all')
            .then(response => {
                let data = [];
                response.data.forEach(e1 => {
                    data.push({
                        carid: e1.carid,
                        make: e1.make,
                        model: e1.make,
                        year: e1.year,
                        capacity: e1.capacity,
                        transmission: e1.transmission
                    });
                    console.log(data);
                })
                setItems({ data: data })
            })
            .catch((error) => {
                console.log(error);
                alert(`Application is facing issue: ` + error);
            });
    }, [])

    return (
        <div>
            <select onChange={handleInputChange}>
                <option disabled={true} >Select a Restaurant Type</option>
                {items.data && 
                    items.data.map((e, index) => (
                    <option key={index} value={index} onSelect={handleInputChange}>
                        {e.make + e.model}
                        {console.log(items.data)}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default CarDropdown;