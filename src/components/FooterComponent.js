import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer className="site-footer text-white">
      <div className="container">
        <div className="row py-4 d-flex align-items-center">
          <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
            <h6
              className="mb-0"
              style={{
                fontFamily: "Playfair Display, serif",
                fontStyle: "italic",
                fontWeight: "600",
                fontSize: "30px",
                color: "#f87242",
              }}
            >
              Connect with us!
            </h6>
          </div>
          <div
            className="col-md-6 col-lg-7 text-center text-md-right"
            style={{ fontSize: "24px" }}
          >
            <a href="/home">
              <i className="fa fa-facebook-f white-text mr-4"> </i>
            </a>
            <a href="/home">
              <i className="fa fa-twitter white-text mr-4"> </i>
            </a>
            <a href="/home">
              <i className="fa fa-instagram white-text"> </i>
            </a>
          </div>
        </div>
      </div>

      <div className="container text-center text-md-left mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">FM Kennel Club</h6>
            <hr
              className="mb-4 mt-0 d-inline-block mx-auto"
              style={{
                width: "60px",
                borderWidth: "4px",
                backgroundColor: "#f87242",
              }}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">Classes</h6>
            <hr
              className="mb-4 mt-0 d-inline-block mx-auto"
              style={{
                width: "60px",
                borderWidth: "4px",
                backgroundColor: "#f87242",
              }}
            />
            <p>
              <Link to="/puppy-classes">Puppy</Link>
            </p>
            <p>
              <Link to="/obedience-classes">Obedience</Link>
            </p>
            <p>
              <Link to="/agility-classes">Agility</Link>
            </p>
            <p>
              <Link to="/scentwork-classes">Scent Work</Link>
            </p>
            <p>
              <Link to="/rally-classes">Rally</Link>
            </p>
            <p>
              <Link to="/conformation">Conformation</Link>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">Useful links</h6>
            <hr
              className="mb-4 mt-0 d-inline-block mx-auto"
              style={{
                width: "60px",
                borderWidth: "4px",
                backgroundColor: "#f87242",
              }}
            />
            <p>
              <Link to="/home">Link 01</Link>
            </p>
            <p>
              <Link to="/home">Link 02</Link>
            </p>
            <p>
              <Link to="/home">Link 03</Link>
            </p>
            <p>
              <Link to="/home">Link 04</Link>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase font-weight-bold">Contact</h6>
            <hr
              className="mb-4 mt-0 d-inline-block mx-auto"
              style={{
                width: "60px",
                borderWidth: "4px",
                backgroundColor: "#f87242",
              }}
            />
            <p>
              <i className="fa fa-home mr-3"></i> West Fargo, ND 58078
            </p>
            <p>
              <i className="fa fa-envelope mr-3"></i> email@email.com
            </p>
            <p>
              <i className="fa fa-phone mr-3"></i> + 1 234 567 8888
            </p>
            <p>
              <i className="fa fa-print mr-3"></i> + 1 234 567 8889
            </p>
          </div>
        </div>
      </div>

      <div className="text-center py-3" style={{ backgroundColor: "#161622" }}>
        © 2022 Copyright:
        <a href="/home"> The Kennel Club</a>
      </div>
    </footer>
  );
}

export default Footer;
