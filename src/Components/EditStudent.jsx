import React, { useState } from "react";
import axios from "axios";
import { Button, Modal, Row, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const EditStudent = ({student}) => {
  const [show, setShow] = useState(false);
  const [editStudent, setEditStudent] = useState(student)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { register, handleSubmit, errors } = useForm();
  

  const onSubmit = (data, e) => {
    axios.put("http://localhost:8080/api/v1/student"+'/'+ student.id+'?name='+data.newName+'&email='+data.newEmail).then(()=>{
      handleClose();
      console.log("se actualizo la informacion")
    })
    console.log(data);
  };

  return (
    <>
      <Button
        className="buttonnShadow mr-4"
        variant="warning"
        onClick={handleShow}
      >
        {" "}
        Edit
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
              <Form.Control type="text" defaultValue={student.name} {...register("newName")} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" defaultValue={student.email} {...register("newEmail")} />
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

export default EditStudent;
