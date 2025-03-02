import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const HomePage = () => {
  return (
    <>
      <div className="home">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light px-5" >
          <a className="navbar-brand" href="#" style={{ width: "22%"}}>
            <img src="/images/logo.png" alt="Logo" height="40" />
          </a>
          <div className="nav-name mx-auto d-flex" style={{ padding: "1% 7% 0 0"}}>
            <a className="nav-link px-3" href="#whom">For Whom?</a>
            <a className="nav-link px-3" href="#product">Product</a>
            <a className="nav-link px-3" href="#features">Features</a>
          </div>
          <div className="log-btn">
            <button className="btn3 btn btn-outline-primary mx-3">Log In</button>
            <button className="btn4 btn btn-primary">Get Started</button>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container mt-2">
          <div className="row">
            {/* Left Section */}
            <div className="col-md-6 mt-5 ml-5 topic-content" style={{ width: "50%" }}>
              <h2 className="mt-4" style={{fontWeight:"790", fontSize:"2.8rem",paddingLeft:"2%"}}>Meetings That Run Themselves</h2>
              <p className="mt-4 pl-1" style={{fontWeight:"500", fontSize:"1.4rem",paddingLeft:"2%",gap:"0.5rem"}}>
                Tired of managing calendars, links, and notes?<br /> AutoMeet automates organizing, hosting, and <br />
                 summarizing your meetings effortlessly.
              </p>
              <div className="row" style={{paddingLeft:"2%"}}>
                <div className="col-md-10 mb-4 mt-4">
                  <button className="btn1 btn btn-danger btn-lg w-100">
                  <img src="/images/google.png" alt="google_icon" style={{width:"7%", marginRight:"10%"}}/>
                    Sign up with Google
                  </button>
                </div>
                <div className="col-md-10">
                  <button className="btn2 btn btn-outline-primary btn-lg w-100">
                  <img src="/images/mail.png" alt="mail_icon" style={{width:"7%", marginRight:"12%"}}/>
                    Sign up with Email
                  </button>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="col-md-6 text-center" style={{ width: "48%" }}>
              <img src="/images/Home1.png" alt="Calendar interface" className="img-fluid" />
            </div>
          </div>
        </div>


        {/*  */}
        <section className="features-section py-4" >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5 ">
                <img
                  src="/images/one calender.png"
                  alt="Calendar demonstration"
                />
              </div>
              <div className="col-md-4" style={{ marginLeft: "12%" , width:"46%", paddingBottom:"18%", height:"70%"}}>
                <h2 className="mb-7" style={{ fontWeight: "790", fontSize: "2.8rem"}}>Seize the Day,<br /> One Meeting at a Time!</h2>
                <p className="lead mb-4 mt-4" style={{ fontWeight: "500", fontSize: "22px", width:"90%"}}>
                  Dynamic scheduling, seamless collaboration, and smart automation — your meetings, redefined.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>


    </>
  );
};

export default HomePage;