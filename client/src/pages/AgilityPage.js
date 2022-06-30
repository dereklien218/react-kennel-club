import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import { AGILITY } from "../shared/agility";
import { FadeTransform } from "react-animation-components";

class AgilityPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      agility: AGILITY,
    };
  }

  render() {
    const agility = this.state.agility.map((agility) => {
      return (
        <FadeTransform
          in
          transformProps={{
            exitTransform: "scale(0.5) translate(10%)",
          }}
        >
          <React.Fragment>
            <Row>
              <Col key={agility.id}>
                <img
                  className="w-100 mb-4"
                  src={agility.image}
                  alt={agility.name}
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs="10" className="mb-5 mt-4">
                <h3>{agility.name}</h3>
                <p className="mt-3">{agility.description}</p>
                <p className="mt-4">
                  <span style={{ color: "#f87242", fontWeight: "bold" }}>
                    Prerequisites:&nbsp;
                  </span>
                  {agility.prerequisites}
                </p>
                <Link
                  className="btn btn-outline-warning"
                  role="button"
                  to={agility.register}
                >
                  Register
                </Link>
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
            <h1>Agility</h1>

            <p className="subhead">
              The Fargo-Moorhead Kennel Club offers agility classes for those
              that have the desire to compete in AKC agility trials.
            </p>
          </Col>
        </Row>
        {agility}
      </Container>
    );
  }
}

export default AgilityPage;
