import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

function Edit() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  // Fetch student data
  useEffect(() => {
    axios
      .get(`http://localhost:8081/get_student/${id}`)
      .then((res) => {
        setValues(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  // Update function (MATCHING YOUR SERVER ROUTE)
  const handleUpdate = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:8081/edit_user/${id}`, values)
      .then((res) => {
        alert("Student Updated Successfully ✅");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-warning text-dark text-center">
          <h4>Edit Student</h4>
        </div>

        <div className="card-body">
          <form onSubmit={handleUpdate}>
            
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={values.name}
                onChange={(e) =>
                  setValues({ ...values, name: e.target.value })
                }
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={values.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Age</label>
              <input
                type="number"
                className="form-control"
                value={values.age}
                onChange={(e) =>
                  setValues({ ...values, age: e.target.value })
                }
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Gender</label>
              <select
                className="form-select"
                value={values.gender}
                onChange={(e) =>
                  setValues({ ...values, gender: e.target.value })
                }
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-success mx-2">
                Update
              </button>

              <Link to="/" className="btn btn-secondary">
                Cancel
              </Link>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;