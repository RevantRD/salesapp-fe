import React, { useState } from "react";
import { API_BASE_URL } from "../config";
import axios from "axios";
import swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//Login page component
function Login() {
  //Login using email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //For loading page slider
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logIn = (e) => {
    e.preventDefault();
    setLoading(true);
    //Axios to get the api and local storage to store the token
    const requestData = { email, password };
    axios
      .post(`${API_BASE_URL}/api/user/login`, requestData)
      .then((result) => {
        if (result.status === 200) {
          setLoading(false);
          localStorage.setItem("token", result.data.message.token);
          localStorage.setItem(
            "user",
            JSON.stringify(result.data.message.user)
          );
          dispatch({
            type: "LOGIN_SUCCESS",
            payload: result.data.message.user,
          });
          setLoading(false);
          navigate("/topsales");
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);

        swal.fire({
          icon: "error",
          title: error.response.data.message,
        });
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="text-center mt-4 mb-2">LOGIN</h1>
          {loading ? (
            <div className="col-md-12 text-center">
              <div class="spinner-border text-primary" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            ""
          )}
          <form onSubmit={logIn}>
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

export default Login;
