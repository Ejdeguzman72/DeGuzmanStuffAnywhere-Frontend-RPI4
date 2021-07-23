import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const GenreDropdownComponent = () => {
    const [items,setItems] = useState([
        { label: "Choose a genre", value: "Choose a genre"},
        { label: "Rock", value: "Rock"},
        { label: "Pop", value: "Pop"},
        { label: "Country", value: "Country"},
        { label: "Classical", value: "Classical"},
        { label: "Electronic", value: "Electronic"},
        { label: "Lofi Beats", value: "Lofi Beats"},
        { label: "Metal", value: "Metal"},
        { label: "Rap", value: "Rap"},
        { label: "Hip Hop", value: "Hip Hop"},
        { label: "R&B", value: "R&B"},
        { label: "Jazz", value: "Jazz"},
    ]);

    const handleInputChange = (event) => {
        const [name,value] = event.target;
        setItems({...items, [name]: value });
    }

    return (
        <Form.Control as="select" name="state" onChange={handleInputChange} >
            {items.map(item => (
                <option
                    key={item.value}
                    value={item.value}
                >
                    {item.label}
                </option>
            ))}
        </Form.Control>
    )
}

export default GenreDropdownComponent;