import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { CONFORMATION } from "../shared/conformation";
import { FadeTransform } from "react-animation-components";

class ConformationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      conformation: CONFORMATION,
    };
  }

  render() {
    const conformation = this.state.conformation.map((conformation) => {
      return (
        <FadeTransform
          in
          transformProps={{
            exitTransform: "scale(0.5) translate(10%)",
          }}
        >
          <React.Fragment>
            <Row>
              <Col key={conformation.id}>
                <img
                  className="w-100 mb-4"
                  src={conformation.image}
                  alt={conformation.name}
                  id={conformation.url}
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs="10" className="mb-5 mt-4">
                <h3>{conformation.name}</h3>
                <p className="mt-3">{conformation.description}</p>
                <p className="mt-3">{conformation.descriptionTwo}</p>
                <p className="mt-3">{conformation.descriptionThree}</p>
                <ul>
                  <li>{conformation.one}</li>
                  <li>{conformation.two}</li>
                  <li>{conformation.three}</li>
                  <li>{conformation.four}</li>
                  <li>{conformation.five}</li>
                  <li>{conformation.six}</li>
                </ul>
                <p className="mt-3">{conformation.descriptionFour}</p>
                <p className="mt-4">
                  <span style={{ color: "#f87242", fontWeight: "bold" }}>
                    Recommended age:&nbsp;
                  </span>
                  {conformation.age}
                  <br />
                  <span style={{ color: "#f87242", fontWeight: "bold" }}>
                    Equipment needed:&nbsp;
                  </span>
                  {conformation.equipment}
                </p>
                <a
                  className="btn btn-outline-warning"
                  href={conformation.register}
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
              Conformation
            </h1>

            <p
              className="mb-5"
              style={{ fontWeight: "300", fontSize: "large" }}
            >
              A conformation class will prepare you and your dog for your first
              experience – and for your best chances at winning. Designed to
              prepare dogs and handlers for competitive dog showing. Stacking,
              gaiting techniques and tips on best presentation are covered. The
              instructor will have hands on your dogs to teach acceptance of the
              judges.
            </p>
          </Col>
        </Row>
        {conformation}
      </Container>
    );
  }
}

export default ConformationPage;
