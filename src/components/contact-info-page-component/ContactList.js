import React, { useState, useEffect } from 'react';
import ContactInfoService from '../../services/ContactInfoService';
import { Link } from 'react-router-dom';
import { Row, Button } from 'react-bootstrap';
import AddContactModalComponent from './AddContactModalComponent'
import Pagination from "@material-ui/lab/Pagination";

const ContactList = () => {
    const [persons, setPersons] = useState([]);
    const [currentContact, setCurrentContact] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useState("");

    const [page, setpage] = useState(1);
    const [count, setCount] = useState(0);
    const [pageSize, setPageSize] = useState(10);

    const onChangeSearchTitle = (event) => {
        const searchTitle = event.target.value;
        setSearchTitle(searchTitle);
    };

    const pageSizes = [10,15,20];

    const getRequestParams = (searchTitle, page, pageSize) => {
        let params = {};

        if (searchTitle) {
            params['firstname'] = searchTitle;
        }

        if (page) {
            params['page'] = page - 1;
        }

        if (pageSize) {
            params['size'] = pageSize;
        }

        return params;
    }

    const retrieveContacts = () => {
        const params = getRequestParams(searchTitle, page, pageSize);

        ContactInfoService.getAllContactInfo(params)
            .then(response => {
                const { persons, totalPages } = response.data;
                setPersons(persons);
                setCount(totalPages);

                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    };

    useEffect(retrieveContacts, [page, pageSize]);

    const refreshList = () => {
        retrieveContacts();
        setCurrentContact(null);
        setCurrentIndex(-1);
    }

    const handlePageChange = (event, value) => {
        setpage(value);
    }

    const handlePageSizeChange = (event) => {
        setPageSize(event.target.value);
        setpage(1);
    }

    const setActiveContact = (contact, index) => {
        setCurrentContact(contact);
        setCurrentIndex(index);
    }

    const removeAllContacts = () => {
        ContactInfoService.deleteAllContactInfo()
            .then(response => {
                setPersons(response.data);
                console.log(response.data);

                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            });
    };

    const findByName = () => {
        ContactInfoService.getSongByTitle(searchTitle)
            .then(response => {
                setPersons(response.data);
                console.log(response.data);
            })
    }

    return (
        <div className="list row">
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search By Title"
                        value={searchTitle}
                        onChange={onChangeSearchTitle}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={findByName}
                        >
                            Search
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <h4>Contact List</h4>


                <div className="mt-3">
                    {"Items per Page: "}
                    <select onChange={handlePageSizeChange} value={pageSize}>
                        {pageSizes.map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>

                    <Pagination
                        className="my-3"
                        count={count}
                        page={page}
                        siblingCount={1}
                        boundaryCount={1}
                        variant="outlined"
                        shape="rounded"
                        onChange={handlePageChange}
                    />
                </div>


                <ul className="list-group">
                    {persons &&
                        persons.map((person, index) => (
                            <li
                                className={
                                    "list-group-item selected-book" + (index === currentIndex ? "active" : "")

                                }
                                onClick={() => setActiveContact(person, index)}
                                key={index}
                            >
                                <p><strong>{person.firstname + ' ' + person.lastname}</strong></p>
                            </li>
                        ))}
                </ul>
                <br></br>
                <Row>
                    <AddContactModalComponent />
                    <Button
                        size="lg"
                        className="btn-danger delete-all-btn" 
                        onClick={removeAllContacts}
                    >
                        Delete All
                    </Button>
                </Row>
            </div>
            <div className="col-md-6">
                {currentContact ? (
                    <div>
                        <h4>Contact Info:</h4>
                        <div>
                            <label>
                                <strong>First Name:</strong>
                            </label>{" "}
                            {currentContact.firstname}
                        </div>
                        <div>
                            <label>
                                <strong>Middle Initial:</strong>
                            </label>{" "}
                            {currentContact.middle_initial}
                        </div>
                        <div>
                            <label>
                                <strong>Last Name:</strong>
                            </label>{" "}
                            {currentContact.lastname}
                        </div>
                        <div>
                            <label>
                                <strong>Address:</strong>
                            </label>{" "}
                            {currentContact.address01 + ' ' + currentContact.address02 + ' ' + currentContact.city + ' ' + currentContact.state + ' ' + currentContact.zipcode}
                        </div>
                        <div>
                            <label>
                                <strong>Phone:</strong>
                            </label>{" "}
                            {currentContact.phone}
                        </div>
                        <div>
                            <label>
                                <strong>Email:</strong>
                            </label>{" "}
                            {currentContact.email}
                        </div>
                        <div>
                            <label>
                                <strong>Birthdate:</strong>
                            </label>{" "}
                            {currentContact.birthdate}
                        </div>

                        <Link
                            to={"/update-contact/" + currentContact.personId}
                            className="badge badge-warning"
                        >
                            Edit
                        </Link>
                    </div>
                ) : (
                        <div>
                            <br></br>
                            <p>Please click on a contact...</p>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default ContactList;