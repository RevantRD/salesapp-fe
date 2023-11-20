import React, { useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../src/config";
import swal from "sweetalert2";
//Registration page component for creating user account
function Registration() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const signUp = (e) => {
    e.preventDefault();
    setLoading(true);
    //Axios to add the user to the database
    const requestData = { firstName: firstName, lastName, email, password };
    axios
      .post(`${API_BASE_URL}/api/user/signup`, requestData)
      .then((result) => {
        debugger;
        if (result.status === 201) {
          setLoading(false);
          //Sweet alert the display alert
          swal.fire({
            icon: "success",
            title: "User successfully registered",
          });
          //Set the input box to empty after clicking the add button
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);

        swal.fire({
          icon: "error",
          title: "Some error occurred please try again later!",
        });
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center mt-3 mb-4">REGISTRATION FORM</h1>
          {loading ? (
            <div className="col-md-12 text-center">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            ""
          )}
          <form onSubmit={signUp}>
            <label className="form-label">First name</label>
            <input
              type="text"
              className="form-control mb-2"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label className="form-label">Last name</label>
            <input
              type="text"
              className="form-control mb-2"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control mb-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control mb-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn btn-primary w-100 mt-3">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
