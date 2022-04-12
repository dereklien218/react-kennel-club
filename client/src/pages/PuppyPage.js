import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { PUPPY } from "../shared/puppy";
import { FadeTransform } from "react-animation-components";

class PuppyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      puppy: PUPPY,
    };
  }

  render() {
    const puppy = this.state.puppy.map((puppy) => {
      return (
        <FadeTransform
          in
          transformProps={{
            exitTransform: "scale(0.5) translate(10%)",
          }}
        >
          <React.Fragment>
            <Row>
              <Col key={puppy.id}>
                <img
                  className="w-100 mb-4"
                  src={puppy.image}
                  alt={puppy.name}
                  id={puppy.url}
                />
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs="10" className="mb-5 mt-4">
                <h3>{puppy.name}</h3>
                <p className="mt-3">{puppy.description}</p>
                <p className="mt-3">{puppy.descriptionTwo}</p>
                <p className="mt-3">{puppy.descriptionThree}</p>
                <p className="mt-4">
                  <span style={{ color: "#f87242", fontWeight: "bold" }}>
                    Recommended age:&nbsp;
                  </span>
                  {puppy.age}
                  <br />
                  <span style={{ color: "#f87242", fontWeight: "bold" }}>
                    Equipment needed:&nbsp;
                  </span>
                  {puppy.equipment}
                </p>
                <a className="btn btn-outline-warning" href={puppy.register}>
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
            <h1>Puppy Classes</h1>

            <p className="subhead">
              We know that a well-trained dog is a joy to own. Puppy classes
              provide a starting point for a lifetime of training and learning
              with your dog. Graduates go on to Canine Good Citizen training and
              earn AKC Therapy Dog titles, as well as start competing in canine
              sports such as obedience and agility.
            </p>
          </Col>
        </Row>
        {puppy}
      </Container>
    );
  }
}

export default PuppyPage;
