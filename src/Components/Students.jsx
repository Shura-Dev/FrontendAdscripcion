import axios from "axios";
import React, { useEffect, useState } from "react";

import { Table, Card, Button, Row } from "react-bootstrap";
import AddStudent from "./AddStudent";
import DeleteStudent from "./DeleteStudent";
import EditStudent from "./EditStudent";

const Students = () => {
  const [student, setStudent] = useState([]);

  const getStudents = () => {
    return axios.get("http://localhost:8080/api/v1/student").then((res) => {
      let datos = res.data;
      setStudent(datos);
    });
  };
  
  useEffect(() => {
    getStudents();
  }, []);
  return (
    <div className="container">
      <h1 className="text-center m-4">Register Students</h1>
      <AddStudent onClick={getStudents} />
      <Card className="cardShadow">
        <Card.Body>
          <Table striped hover variant="light" className="m-9">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th> YEAR OF BIRTH</th>
                <th>AGE</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {student.map((est) => (
                <tr key={est.id}>
                  <td>{est.id}</td>
                  <td>{est.name}</td>
                  <td>{est.email}</td>
                  <td>{est.dob}</td>
                  <td>{est.age}</td>
                  <td>
                    <div className="botones">
                    <EditStudent student={est} />
                    <DeleteStudent id={est.id}/>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Students;
