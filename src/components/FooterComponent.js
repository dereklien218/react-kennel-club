import React from "react";
import { Link } from "react-router-dom";

function Footer(props) {
  return (
    <footer>
      <div className="container">
        <div className="row py-4 d-flex align-items-center">
          <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
            <h2>Connect with us!</h2>
          </div>
          <div
            className="col-md-6 col-lg-7 text-center text-md-right"
            style={{ fontSize: "24px" }}
          >
            <a href="/home">
              <i className="fa fa-facebook-f mr-4"> </i>
            </a>
            <a href="/home">
              <i className="fa fa-twitter mr-4"> </i>
            </a>
            <a href="/home">
              <i className="fa fa-instagram mr-4"> </i>
            </a>
          </div>
        </div>
      </div>

      <div className="container text-center text-md-left mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6>The Kennel Club</h6>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6>Classes</h6>
            <hr />
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
            <h6>Useful links</h6>
            <hr />
            <p>
              <Link to={{ pathname: "https://www.akc.org/" }} target="_blank">
                American Kennel Club
              </Link>
            </p>
            <p>
              <Link
                to={{
                  pathname: "https://webapps.akc.org/event-search/#/search",
                }}
                target="_blank"
              >
                AKC Events
              </Link>
            </p>
            <p>
              <Link to={{ pathname: "https://www.jjdog.com/" }} target="_blank">
                J and J Dog Supplies
              </Link>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6>Contact</h6>
            <hr />
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
