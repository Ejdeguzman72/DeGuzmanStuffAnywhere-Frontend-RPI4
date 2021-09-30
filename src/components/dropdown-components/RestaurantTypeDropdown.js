import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const RestaurantTypeDropdown = (props) => {
    const [items, setItems] = useState({
        type: [
            {
                restaurantTypeId: 0,
                restaurantDescr: ""
            }
        ]
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setItems({ ...items, [name]: value });
        console.log(name);
        console.log(value)
    };


    useEffect(() => {
        Axios.get('http://ec2-54-162-1-238.compute-1.amazonaws.com:8080/app/restaurant-types/all')
            .then(response => {
                let data = [];
                response.data.forEach(e1 => {
                    data.push({
                        type: {
                            restaurantTypeId: e1.restaurantTypeId,
                            restaurantDescr: e1.restaurantDescr
                        }
                    });
                    console.log(data);
                })
                setItems({ type: data })
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
                {console.log(items.type)}
                {items.type && 
                    items.type.map((e, index) => (
                    <option key={index} value={JSON.stringify(e.type)} onSelect={handleInputChange}>
                        {JSON.stringify(e.type)}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default RestaurantTypeDropdown;