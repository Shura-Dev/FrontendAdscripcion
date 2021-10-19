import React, { useState } from "react";
import axios from "axios";
import { Button, Modal, Row, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddStudent = ({getStudents}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { register, handleSubmit, errors } = useForm();
  

  const onSubmit = (data, e) => {
    axios.post("http://localhost:8080/api/v1/student",{
      name:data.name,
      email:data.email,
      dob:data.year
    }).then(()=>{
      handleClose();
    })
    console.log(data);
  };

  return (
    <>
      <Button
        className="buttonnShadow mb-4"
        variant="outline-primary"
        onClick={handleShow}
      >
        {" "}
        Add Student
      </Button>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" {...register("name")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" {...register("email")} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>year of birth</Form.Label>
              <Form.Control type="date" placeholder="Enter Age" {...register("year")} />
            </Form.Group>
            <Button className="m-4" variant="secondary" onClick={handleClose}>
                Close
              </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddStudent;
