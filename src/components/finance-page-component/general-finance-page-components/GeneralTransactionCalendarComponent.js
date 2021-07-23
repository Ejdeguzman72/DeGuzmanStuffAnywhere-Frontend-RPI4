import React from 'react'
import { Form } from 'react-bootstrap';

class GeneralTransactionCalendarComponent extends React.Component{

    render(){

        return(
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <Form.Group controlId="dob">
                            <Form.Label>Select Date</Form.Label>
                            <Form.Control type="text" name="dob" placeholder="Date of Birth" />
                        </Form.Group>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default GeneralTransactionCalendarComponent;