import React, {useState, useEffect} from 'react';
import Input from '@material-ui/core/Input';

const AmountInput = () => {

    const [amount, setAmount] = useState({
        data: [
            {
                agendaID: 0,
                name: ""
            }
        ]
    })

    return (
        <div>
            <Input type="double" placeholder="Enter Amount:" />
        </div>
    )
}