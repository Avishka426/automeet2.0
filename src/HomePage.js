import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";


const HomePage = () => {
  return (
    <div className="home">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light  px-4">
        <a className="navbar-brand" href="#">
          <img src="/images/logo.png" alt="Logo" height="40" />
        </a>
        <div className="nav-name mx-auto d-flex">
          <a className="nav-link px-3" href="#whom">For Whom?</a>
          <a className="nav-link px-3" href="#product">Product</a>
          <a className="nav-link px-3" href="#features">Features</a>
        </div>
        <div className="log-btn">
          <button className="btn3 btn btn-outline-primary mx-2">Log In</button>
          <button className="btn4 btn btn-primary">Get Started</button>
        </div>
      </nav>
      
      {/* Main Content */}
      <div className="container mt-2">
        <div className="row ">
          {/* Left Section */}
          <div className="col-md-6 mt-5  topic-content">
            <h2 className="mt-5">Meetings That Run Themselves</h2>
            <p className="mt-4">
            Tired of managing calendars, links, and notes? 
AutoMeet automates organizing, hosting, and 
summarizing your meetings effortlessly.
            </p>
            <div className="row">
  <div className="col-md-12 mb-2 mt-5">
    <button className="btn1 btn btn-danger btn-lg w-100">
      Sign up with Google
    </button>
  </div>
  <div className="col-md-12">
    <button className="btn2 btn btn-outline-primary btn-lg w-100">
      Sign up with Email
    </button>
  </div>
</div>
          </div>
          
          {/* Right Section */}
          <div className="col-md-6 text-center mt-3">
            <img src="/images/Home1.png" alt="Her" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
