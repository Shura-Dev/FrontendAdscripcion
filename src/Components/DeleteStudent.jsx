import React from 'react'
import axios from "axios"
import {Button} from 'react-bootstrap'
const DeleteStudent = ({id}) => {
  const deleteStudent =() =>{
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento " + id);
    if (opcion == true) {
     
    axios.delete("http://localhost:8080/api/v1/student"+'/'+id).then(()=>{
      console.log("se elimino")
      })

    }


  }
  return (
    <div>
      <Button variant="danger" className="ml-4" onClick={()=> deleteStudent(id)}>Delete</Button> 
    </div>
  )
}

export default DeleteStudent
