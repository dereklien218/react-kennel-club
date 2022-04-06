import React, { Component } from "react";

class HeroParallax extends Component {
  render() {
    return (
      <header
        className="jumbotron-fluid parallax vh-100"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, .4), rgba(0, 0, 0, .2)), url(" +
            "assets/images/IMG_7113.jpg" +
            ")",
        }}
      >
        <div className="container h-100">
          <div className="row row-content mx-auto justify-content-center h-100 align-items-center">
            <div className="col-12 col-md-8 text-center">
              <div className="display-3 text-white mt-4 mt-md-5">
                <span
                  style={{
                    fontWeight: "900",
                    fontFamily: "Playfair Display",
                    fontStyle: "italic",
                  }}
                >
                  The Kennel Club
                </span>
                <p
                  className="lead text-white mt-4"
                  style={{ fontFamily: "Open Sans" }}
                >
                  Pore as debis pe pariae dellore deriat. Tur aute non
                  exerovidemo tem repel et ipsunt alit vel imus elictem.
                </p>
                <a
                  className="btn btn-outline-warning text-warning-hover mt-4"
                  href="/about"
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

export default HeroParallax;
