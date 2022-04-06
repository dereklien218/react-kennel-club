import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { OBEDIENCE } from "../shared/obedience";
import { FadeTransform } from "react-animation-components";

class ObediencePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obedience: OBEDIENCE,
    };
  }

  render() {
    const obedience = this.state.obedience.map((obedience) => {
      return (
        <FadeTransform
          in
          transformProps={{
            exitTransform: "scale(0.5) translate(10%)",
          }}
        >
          <React.Fragment>
            <Row>
              <Col key={obedience.id}>
                <img
                  className="w-100 mb-4"
                  src={obedience.image}
                  alt={obedience.name}
                  id={obedience.url}
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs="10" className="mb-5 mt-4">
                <h3>{obedience.name}</h3>
                <p className="mt-3">{obedience.description}</p>
                <p className="mt-3">{obedience.descriptionTwo}</p>
                <p className="mt-4">
                  <span style={{ color: "#f87242", fontWeight: "bold" }}>
                    Prerequisite:&nbsp;
                  </span>
                  {obedience.prerequisite}
                  <br />
                  <span style={{ color: "#f87242", fontWeight: "bold" }}>
                    Recommended age:&nbsp;
                  </span>
                  {obedience.age}
                  <br />
                  <span style={{ color: "#f87242", fontWeight: "bold" }}>
                    Equipment needed:&nbsp;
                  </span>
                  {obedience.equipment}
                </p>
                <a
                  className="btn btn-outline-warning"
                  href={obedience.register}
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
          <Col xs="10" md="8" lg="6" className="text-center">
            <h1
              className="mb-3 mt-3 text"
              style={{ fontWeight: "600", color: "#f87242" }}
            >
              Obedience Classes
            </h1>

            <p
              className="mb-5"
              style={{ fontWeight: "300", fontSize: "large" }}
            >
              The Fargo-Moorhead Kennel Club offers many different levels of
              obedience classes. Whether you want a well mannered house pet or a
              highly skilled competitor, we have the right class for you.
            </p>
          </Col>
        </Row>
        {obedience}
      </Container>
    );
  }
}

export default ObediencePage;
