import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const HomePage = () => {
  return (
    <>
      <div className="home">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light px-4">
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
          <div className="row">
            {/* Left Section */}
            <div className="col-md-6 mt-5 topic-content">
              <h2 className="mt-5">Meetings That Run Themselves</h2>
              <p className="mt-4">
                Tired of managing calendars, links, and notes? AutoMeet automates organizing, hosting, and summarizing your meetings effortlessly.
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
              <img src="/images/Home1.png" alt="Calendar interface" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      {/* Calendar Features Section */}
      <section className="features-section bg-light py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img 
                src="/images/one calender.png" 
                alt="Calendar demonstration" 
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h2 className="mb-4">Seize the Day, One Meeting at a Time!</h2>
              <p className="lead mb-4">
                Dynamic scheduling, seamless collaboration, and smart automation — your meetings, redefined.
              </p>
              <div className="features-list">
                <div className="feature-item mb-3">
                  <h4>Smart Scheduling</h4>
                  <p>AI-powered calendar management that finds the perfect time for everyone.</p>
                </div>
                <div className="feature-item mb-3">
                  <h4>Seamless Integration</h4>
                  <p>Works with your favorite tools and platforms right out of the box.</p>
                </div>
                <div className="feature-item">
                  <h4>Meeting Intelligence</h4>
                  <p>Automated note-taking and action item tracking for maximum productivity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;