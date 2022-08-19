import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main container">
      <div className="row mt-5">
        <div className="text-container col-8 d-flex flex-column gap-1 ">
          <h1 className="display-1">Hi there!</h1>
          <p className="">Welcome to this new world!</p>

          <div className="btn-container d-flex gap-4 py-3">
            <Link to={"/login"}>
              <button type="button" className="btn btn-outline-primary">
                Login
              </button>
            </Link>
            <Link to={"/register"}>
              <button type="button" className="btn btn-outline-secondary">
                Register
              </button>
            </Link>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
};

export default Main;
