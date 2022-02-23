import React, { useState, useEffect } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import ContactService from '../../../services/ContactInfoService';
import ContactInfoTabs from '../../tab-components/ContactInfoTabs';

const Contact = props => {
    const initialState = {
        personId: 0,
        firstname: "",
        middleInitial: "",
        lastname: "",
        address01: "",
        address02: "",
        city: "",
        state: "",
        zipcode: "",
        birthdate: "",
        age: 0,
        email: "",
        phone: ""
    };

    const [currentContact, setCurrentContact] = useState(initialState);
    const [message, setMessage] = ("");

    const getContact = (personId) => {
        ContactService.getContactInfoById(personId)
            .then(response => {
                setCurrentContact(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(() => {
        getContact(props.match.params.personId);
    }, [props.match.params.personId]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCurrentContact({ ...currentContact, [name]: value });
    };

    const updateContact = () => {
        ContactService.updateContactInfo(currentContact.personId, currentContact)
            .then(response => {
                console.log(response.data);
                alert("The contact was updated successfully");
            })
            .catch(error => {
                console.log(error);
            });
    };

    const deleteContact = () => {
        ContactService.deleteContactById(currentContact.personId)
            .then(response => {
                console.log(response.data);
                props.history.push("/contact-info");
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <br></br>
            <ContactInfoTabs />
            <div id="white-background">
                <br></br>
                {currentContact ? (
                    <div className="edit form">
                        <h4>Contact Info</h4>
                        <form className="update-book-container">
                            <div className="form-group">
                                <label htmlFor="name">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstname"
                                    name="firstname"
                                    value={currentContact.firstname}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Middle Initial</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="middleInitial"
                                    name="middleInitial"
                                    value={currentContact.middleInitial}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="author">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastname"
                                    name="lastname"
                                    value={currentContact.lastname}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descr">Address_01</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address01"
                                    name="address01"
                                    value={currentContact.address01}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descr">Address_02</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address02"
                                    name="address02"
                                    value={currentContact.address02}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descr">City</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="city"
                                    name="city"
                                    value={currentContact.city}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descr">State</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="state"
                                    name="state"
                                    value={currentContact.state}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descr">Zip</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="zipcode"
                                    name="zipcode"
                                    value={currentContact.zipcode}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descr">Age</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="age"
                                    name="age"
                                    value={currentContact.age}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descr">Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={currentContact.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="descr">Phone</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="phone"
                                    name="phone"
                                    value={currentContact.phone}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </form>
                    </div>
                ) : (
                    <div>
                        <Button className="badge badge-danger mr-2" onClick={() => updateContact(true)}>
                            Update
                        </Button>
                    </div>
                )}

                <br></br>
                <Row>
                    <Col md={4}>

                    </Col>
                    <Col md={2}>
                        <div>
                            <Button type="submit" size="lg" variant="dark" onClick={updateContact}>Update</Button>
                        </div>
                    </Col>
                    <Col md={2}>
                        <div>
                            <Button type="submit" size="lg" variant="outline-danger" onClick={deleteContact}>
                                Delete
                            </Button>
                        </div>
                    </Col>
                    <Col md={4}>

                    </Col>
                </Row>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Contact;

