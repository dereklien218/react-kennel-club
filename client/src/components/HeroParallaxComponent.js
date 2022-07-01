import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeroParallax extends Component {
  render() {
    return (
      <header className="jumbotron-fluid heroParallax vh-100">
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
                  The Kennel Club is an AKC affiliated dog club since 1953. It's
                  a great place to learn and have fun with your dog!
                </p>
                <Link
                  className="btn btn-outline-warning text-warning-hover mt-4"
                  role="button"
                  to="/about"
                  style={{ color: "#fff" }}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default HeroParallax;
