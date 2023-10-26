import React, { useState, useEffect } from 'react';
import EntertainmentService from '../../services/EntertainmentService';
import { Button, Modal } from 'react-bootstrap';
import PaginationComponent from '../pagination/Pagination';
import AddEntertainmentModal from './AddEntertainmentModal';

const EntertainmentList = () => {
    const [list, setList] = useState([]);
    const [currentEntertainment, setCurrentEntertainment] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [currentPage, setCurrentPage] = useState(1);
    const [show, setShow] = useState(false);
    const itemsPerPage = 8;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const retrieveEntertainmentData = () => {
        const exerciseTypeId = 1;
        EntertainmentService.getAllEntertainment()
            .then(response => {
                console.log(response.data.list)
                setList(response.data.list);
            })
            .catch(error => {
                console.log(error);
            }, [])
    }

    useEffect(() => {
        retrieveEntertainmentData();
    }, []);

    const setActiveEntertainment = (entertainment, index) => {
        setCurrentEntertainment(entertainment);
        setCurrentIndex(index);
        setShow(true);
    }

    const handleClose = () => {
        setShow(false);
        setCurrentEntertainment(null)
        setCurrentIndex(-1)
    }

    return (
        <div>
            <div>
                <ul className="list-group">
                    {currentItems.map((item, index) => (
                        <li key={item.entityId}
                            className={"list-group-item selected-book" + (index === currentIndex ? "active" : "")}
                            onClick={() => setActiveEntertainment(item, index)}>
                            {item.name} - {item.descr}
                        </li>
                    ))}
                </ul>
                <br></br>
                <PaginationComponent
                    itemsPerPage={itemsPerPage}
                    totalItems={list.length}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
                {
                    currentEntertainment ? (
                        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                            <Modal.Header closeButton>
                                <Modal.Title>Entertainment Info</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="recipe-modal-container">
                                    <div className="form-group">
                                        <p>Name: {currentEntertainment.name}</p>
                                        <p>Category: {currentEntertainment.descr}</p>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="info">Delete</Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    ) : null
                }
            </div>
        </div>
    )
}

export default EntertainmentList;