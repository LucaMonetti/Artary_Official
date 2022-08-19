import React from "react";
import Main from "../Main";
import Login from "../Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "../Register";

const App = () => {
  return (
    <div className="app container-fluid">
      <Router>
        <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/Register" exact element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
