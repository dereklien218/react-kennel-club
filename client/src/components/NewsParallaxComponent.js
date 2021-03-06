import React, { Component } from "react";
import { Link } from "react-router-dom";

class NewsParallax extends Component {
  render() {
    return (
      <header className="jumbotron-fluid newsParallax" id="news">
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-12 col-md-8 text-center">
              <div className="text-white pt-3 pb-3 mt-5 mb-5">
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
                  Find out the latest training tips, advice and news from the
                  Kennel Club. View upcoming conformation, companion and
                  performance events.
                </p>
                <Link
                  className="btn btn-outline-warning text-warning-hover mt-4"
                  role="button"
                  to="/news-events"
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

export default NewsParallax;
