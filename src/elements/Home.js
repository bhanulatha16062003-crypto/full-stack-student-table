import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    axios
      .get("http://localhost:8081/students")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  // Open modal
  const confirmDelete = (id) => {
    setDeleteId(id);
    setShowModal(true);
  };

  // Delete function
  const handleDelete = () => {
    axios
      .delete(`http://localhost:8081/delete/${deleteId}`)
      .then(() => {
        setShowModal(false);
        fetchStudents(); // refresh table
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">Students List</h3>

      <div className="d-flex justify-content-end mb-3">
        <Link className="btn btn-success" to="/create">
          Add Student
        </Link>
      </div>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {data.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.age}</td>
              <td>{student.gender}</td>
              <td>
                <Link
                  className="btn btn-info btn-sm mx-1"
                  to={`/read/${student.id}`}
                >
                  Read
                </Link>

                <Link
                  className="btn btn-warning btn-sm mx-1"
                  to={`/edit/${student.id}`}
                >
                  Edit
                </Link>

                <button
                  className="btn btn-danger btn-sm mx-1"
                  onClick={() => confirmDelete(student.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Bootstrap Modal */}
      {showModal && (
        <div className="modal d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header bg-danger text-white">
                <h5 className="modal-title">Confirm Delete</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              <div className="modal-body">
                <p>Are you sure you want to delete this student?</p>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>

                <button
                  className="btn btn-danger"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;