import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { SCENTWORK } from "../shared/scentwork";
import { FadeTransform } from "react-animation-components";

class ScentworkPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scentwork: SCENTWORK,
    };
  }

  render() {
    const scentwork = this.state.scentwork.map((scentwork) => {
      return (
        <FadeTransform
          in
          transformProps={{
            exitTransform: "scale(0.5) translate(10%)",
          }}
        >
          <React.Fragment>
            <Row>
              <Col key={scentwork.id}>
                <img
                  className="w-100 mb-4"
                  src={scentwork.image}
                  alt={scentwork.name}
                  id={scentwork.url}
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs="10" className="mb-5 mt-4">
                <h3>{scentwork.name}</h3>
                <p className="mt-3">{scentwork.description}</p>
                <p className="mt-4">
                  <span style={{ color: "#f87242", fontWeight: "bold" }}>
                    Recommended age:&nbsp;
                  </span>
                  {scentwork.age}
                  <br />
                  <span style={{ color: "#f87242", fontWeight: "bold" }}>
                    Equipment needed:&nbsp;
                  </span>
                  {scentwork.equipment}
                </p>
                <a
                  className="btn btn-outline-warning"
                  href={scentwork.register}
                >
                  Register
                </a>
              </Col>
            </Row>
          </React.Fragment>
        </FadeTransform>
      );
    });

    return (
      <Container className="mt-5 pt-5 pb-5">
        <Row className="justify-content-center">
          <Col xs="10" md="8" className="text-center">
            <h1
              className="mb-3 mt-3 text"
              style={{ fontWeight: "600", color: "#f87242" }}
            >
              Scent Work Classes
            </h1>

            <p
              className="mb-5"
              style={{ fontWeight: "300", fontSize: "large" }}
            >
              Discover Scent Work! The latest AKC training activity that
              develops your dog’s natural scenting abilities through fun and
              games. Geared for dogs of all shapes, sizes and ages, Scent Work
              has found enthusiastic participants seeking a lower impact canine
              activity that offers great rewards for both handlers and their
              dogs. SW class teaches basics all the way to competition level of
              search skills, builds dogs confidence, burns off mental and
              physical energy, and reinforces the bond between dog and owner.
            </p>
          </Col>
        </Row>
        {scentwork}
      </Container>
    );
  }
}

export default ScentworkPage;
