import React, { Component } from "react";

class NewsParallax extends Component {
  render() {
    return (
      <header
        className="jumbotron-fluid parallax"
        id="news"
        style={{
          backgroundHeight: "auto",
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url(" +
            "assets/images/IMG_7270.jpg" +
            ")",
        }}
      >
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-12 col-md-8 text-center">
              <div className="text-white mt-5 mb-5">
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "2.5rem",
                    fontFamily: "Playfair Display",
                    fontStyle: "italic",
                  }}
                >
                  News & Events
                </span>
                <p
                  className="lead text-white mt-3"
                  style={{ fontFamily: "Open Sans" }}
                >
                  Pore as debis pe pariae dellore deriat. Tur aute non
                  exerovidemo tem repel et ipsunt alit vel imus elictem.
                </p>
                <a
                  className="btn btn-outline-warning text-warning-hover mt-4"
                  href="/news-events"
                  style={{ color: "#fff" }}
                  role="button"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default NewsParallax;
