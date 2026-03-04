import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Create() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    age: "",
    gender: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8081/add_user", values)
      .then((res) => {
        alert("Student Added Successfully ✅");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        
        <div className="card-header bg-success text-white text-center">
          <h4>Add Student</h4>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
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
                placeholder="Enter Email"
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
                placeholder="Enter Age"
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
                Add Student
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

export default Create;