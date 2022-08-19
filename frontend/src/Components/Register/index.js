import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register container">
      <div className="row mt-5">
        <div className="col-8 d-flex flex-column gap-5">
          <h1 className={"display-1"}>Register Page</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                autoComplete={"off"}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" />
            </div>
            <div className="btn-container d-flex gap-4 pt-4">
              <button type="submit" className="btn btn-outline-primary">
                Register
              </button>
              <div className="row g-3 align-items-center">
                <div className="col-auto">
                  <Link to={"/login"}>
                    <button type="button" className="btn btn-outline-secondary">
                      Login
                    </button>
                  </Link>
                </div>
                <div className="col-auto">
                  <span
                    id="registerHelpInline"
                    className="form-text text-decoration-none"
                  >
                    You can enter your account here!
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

export default Register;
