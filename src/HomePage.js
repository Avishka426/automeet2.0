import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const HomePage = () => {
  return <>
    <div className="home">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light px-5" >
        <a className="navbar-brand" href="#" style={{ width: "22%" }}>
          <img src="/images/logo.png" alt="Logo" height="40" />
        </a>
        <div className="nav-name mx-auto d-flex" style={{ padding: "1% 7% 0 0" }}>
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
            <h2 className="mt-4" style={{ fontWeight: "790", fontSize: "2.8rem", paddingLeft: "2%" }}>Meetings That Run Themselves</h2>
            <p className="mt-4 pl-1" style={{ fontWeight: "500", fontSize: "1.4rem", paddingLeft: "2%", gap: "0.5rem" }}>
              Tired of managing calendars, links, and notes?<br /> AutoMeet automates organizing, hosting, and <br />
              summarizing your meetings effortlessly.
            </p>
            <div className="row" style={{ paddingLeft: "2%" }}>
              <div className="col-md-10 mb-4 mt-4">
                <button className="btn1 btn btn-danger btn-lg w-100">
                  <img src="/images/google.png" alt="google_icon" style={{ width: "7%", marginRight: "10%" }} />
                  Sign up with Google
                </button>
              </div>
              <div className="col-md-10">
                <button className="btn2 btn btn-outline-primary btn-lg w-100">
                  <img src="/images/mail.png" alt="mail_icon" style={{ width: "7%", marginRight: "12%" }} />
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
      <section className="section_2">
        <div class="container1" style={{ width: "90%", margin: "0 auto" }}>
          <div class="row">
            <div class="image-container">
              <img src="/images/one calender.png" alt="Calendar demonstration" />
            </div>
            <div class="text-container">
              <h2>Seize the Day,<br /> One Meeting at a Time!</h2>
              <p>
                Dynamic scheduling, seamless collaboration, and smart automation —
                your meetings, redefined.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="section_3" style={{ width: "90%", margin: "auto", paddingBottom: "2%" }}>
        <div className="container_features" style={{ display: "flex", justifyContent: "center", padding: "0 5%" }}>
          <div className="features_left" style={{ width: "50%", marginRight: "5%", paddingTop: "2%" }}>
            <div className="features">
              <div className="features_top" >
                <img src="/images/notes.png" alt="notes" />
                <h2>Take your own notes</h2>
              </div>
              <div className="features_bottom">
                <p>Capture ideas seamlessly during ongoing discussions.</p>
              </div>
            </div>
            <div className="features">
              <div className="features_top" >
                <img src="/images/AI.png" alt="AI" />
                <h2>AI help to keep track</h2>
              </div>
              <div className="features_bottom">
                <p>Instant meeting summaries at your fingertips.</p>
              </div>
            </div>
            <di className="features">
              <div className="features_top">
                <img src="/images/events.png" alt="event" />
                <h2>Event customization</h2>
              </div>
              <div className="features_bottom">
                <p>Keep a hold of your schedule with standalone customization.</p>
              </div>
            </di>
          </div>

          <div className="features_right" style={{ width: "50%" }}>
            <a href="#"><img src="/images/features_right.png" alt="features_right" style={{ width: "85%", paddingBottom: "10%", boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)" }}></img></a>
          </div>
        </div>
      </section>


      <section className="section_4">
        <div className="s4_revolution">
          <h2>Revolutionize Your Meetings <br />
            From Chaos to Effortless Efficiency</h2>
        </div>
        <div className="s4_ditch">
          <h4>Ditch the chaos of scheduling, note-taking, and endless reminders. <br />
            AutoMeet handles the heavy lifting so you can focus on what truly matters: <br />
            collaborating and creating.</h4>
        </div>
        <div className="sction_4_btn">
          <a href="#">
            <button className="btn4 btn" id="sction_4_btn">Sign up</button>
          </a>
        </div>
      </section>

    </div>






  </>;
};

export default HomePage;