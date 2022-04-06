import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { RALLY } from "../shared/rally";
import { FadeTransform } from "react-animation-components";

class RallyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rally: RALLY,
    };
  }

  render() {
    const rally = this.state.rally.map((rally) => {
      return (
        <FadeTransform
          in
          transformProps={{
            exitTransform: "scale(0.5) translate(10%)",
          }}
        >
          <React.Fragment>
            <Row>
              <Col key={rally.id}>
                <img
                  className="w-100 mb-4"
                  src={rally.image}
                  alt={rally.name}
                  id={rally.url}
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs="10" className="mb-5 mt-4">
                <h3>{rally.name}</h3>
                <p className="mt-3">{rally.description}</p>
                <p className="mt-3">{rally.descriptionTwo}</p>
                <p className="mt-4">
                  <span style={{ color: "#f87242", fontWeight: "bold" }}>
                    Prerequisite:&nbsp;
                  </span>
                  {rally.prerequisite}
                  <br />
                  <span style={{ color: "#f87242", fontWeight: "bold" }}>
                    Recommended age:&nbsp;
                  </span>
                  {rally.age}
                  <br />
                  <span style={{ color: "#f87242", fontWeight: "bold" }}>
                    Equipment needed:&nbsp;
                  </span>
                  {rally.equipment}
                </p>
                <a className="btn btn-outline-warning" href={rally.register}>
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
          <Col xs="10" className="text-center">
            <h1
              className="mb-3 mt-3 text"
              style={{ fontWeight: "600", color: "#f87242" }}
            >
              Rally Classes
            </h1>

            <p
              className="mb-5"
              style={{ fontWeight: "300", fontSize: "large" }}
            >
              Think of an AKC Rally® event as any team sport: You and your dog
              navigate a course, side-by-side, as you steer him through a course
              of 10-20 different signs. Each of these signs provides
              instructions regarding the next skill that is to be performed. The
              dog and handler move continuously throughout the course with the
              dog under control at the handler’s left side. There is a clear
              sense of teamwork between the dog and handler both during and
              between the numbered signs. Although each performance is timed,
              having a good race time is not the goal; it’s all about working as
              a team while performing the skills, with the dog under control.
            </p>
          </Col>
        </Row>
        {rally}
      </Container>
    );
  }
}

export default RallyPage;
