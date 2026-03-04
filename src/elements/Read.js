import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Read() {
  const [student, setStudent] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8081/get_student/${id}`)
      .then((res) => {
        setStudent(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-dark text-white text-center">
          <h4>Student Details</h4>
        </div>

        <div className="card-body">
          <p><strong>ID:</strong> {student.id}</p>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Age:</strong> {student.age}</p>
          <p><strong>Gender:</strong> {student.gender}</p>
        </div>

        <div className="card-footer text-center">
          <Link to="/" className="btn btn-primary">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Read;