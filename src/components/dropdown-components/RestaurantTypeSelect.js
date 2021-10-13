import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const RestaurantTypeSelect = (props) => {
    const [restaurantType,setRestaurantType] = useState({
        restaurantTypeId: 0,
        restaurantDescr: ''
    })

    const onSubmit = () => {
        console.log(restaurantType)
    }

    return (
        <form>
            <input 
                type="text"
                value={restaurantType.restaurantTypeId}
                onChange={e => setRestaurantType({...restaurantType, restaurantTypeId: e.target.value})}
            />
            <input 
                type="text"
                value={restaurantType.restaurantDescr}
                onChange={e => setRestaurantType({...restaurantType, restaurantDescr: e.target.value})}
            />
            {/* <button onClick={onSubmit} type="submit" name="submit">Submit</button> */}
        </form>
    )
}

export default RestaurantTypeSelect;