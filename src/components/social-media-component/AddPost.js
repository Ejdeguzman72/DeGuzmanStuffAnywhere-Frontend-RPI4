import React, { useState, useEffect } from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import Axios from 'axios';
import '../../style-sheets/medical-finance-page.css';

export default function AddPost() {

  const initialState = {
   postId: 0,
   content: "",
   createdDate: "",
   userId: 0
  }

  const [post, setPost] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  };

  const savePost = () => {
    let data = {
      postId: post.psotId,
      content: post.content,
      createdDate: post.createdDate,
      userId: post.userId
    };

    Axios.post('http://localhost:8080/app/posts/add', data)
      .then(response => {
        setPost({
            psotId: response.data.postId,
            content: response.data.content,
            createdDate: response.data.createdDate,
            userId: response.data.userId
        });
        setSubmitted(true);
      })
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const newPost = () => {
    setPost(initialState);
    setSubmitted(false);
  }

  return (
    <>
      <Button variant="info" size="lg" onClick={handleShow}>
        Add Post
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>What Do You Want To Share?</Modal.Title>
        </Modal.Header>

        {submitted ? (
          <Modal.Body>
            <div>
              <h4>Post has been added successfully</h4>
              <Button className="btn btn-success" onClick={newPost} size="lg" variant="info">
                Add
              </Button>
            </div>
          </Modal.Body>
        ) : (
          <Modal.Body>
            Please fill out the following information:
            <br></br>
            <div className="modal-container">
              <textarea
                type="text"
                rows="10"
                cols="50"
                placeholder="What Do You Want To Share?"
                className="form-control"
                name="name"
                onChange={handleInputChange} /><br></br>
            </div>

          </Modal.Body>
        )}
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={savePost}>Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}