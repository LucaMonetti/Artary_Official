import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.name });
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = process.env.LOGIN_URL;

    const { data: res } = axios
      .post(url, data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        // ToDo: Add windows change
      })
      .catch((err) => {
        if (
          err.response &&
          err.response.status >= 400 &&
          err.response.status <= 500
        )
          setError(err.response.data.message);
      });
  };

  return (
    <div className="login container">
      <div className="row mt-5">
        <div className="col-8 d-flex flex-column gap-5">
          <h1 className={"display-1"}>Login Page</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp"
                onChange={handleChange}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="btn-container d-flex gap-4 pt-4">
              <button type="submit" className="btn btn-outline-primary">
                Login
              </button>
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <Link to={"/register"}>
                    <button type="button" className="btn btn-outline-secondary">
                      Register
                    </button>
                  </Link>
                </div>
                <div className="col-auto">
                  <span
                    id="registerHelpInline"
                    className="form-text text-decoration-none"
                  >
                    You can create an account here!
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
