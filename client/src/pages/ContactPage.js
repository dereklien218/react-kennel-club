import React, { Component } from "react";
import { Button, Label, Col, Row, Container } from "reactstrap";
import { Control, Form, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(+val);
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class ContactPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      phoneNum: "",
      email: "",
      agree: false,
      contactType: "By Phone",
      feedback: "",
      touched: {
        firstName: false,
        lastName: false,
        phoneNum: false,
        email: false,
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.postFeedback(values);
    this.props.resetFeedbackForm();
  }

  render() {
    return (
      <Container className="mt-5 pt-5 pb-5">
        <Row className="justify-content-center">
          <Col xs={10}>
            <h2>Contact Us</h2>
            <hr />
          </Col>
        </Row>

        <Row className="row-content align-items-center">
          <Col sm={4}>
            <h5>Our Address</h5>
            <address>
              The Kennel Club
              <br />
              PO Box 1234
              <br />
              West Fargo, ND 58078
            </address>
          </Col>
          <Col>
            <a role="button" className="btn btn-link" href="tel:+1234567890">
              <i className="fa fa-phone" /> 1-234-456-7890
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto:fakeemail@fakeemail.co"
            >
              <i className="fa fa-envelope-o" /> email@email.com
            </a>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={10}>
            <h2>Send us your Feedback</h2>
            <hr />
          </Col>
          <Col xs={10}>
            <Form
              model="feedbackForm"
              onSubmit={(values) => this.handleSubmit(values)}
            >
              <Row className="form-group">
                <Label htmlFor="firstName" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".firstName"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(2),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".firstName"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                      minLength: "Must be at least 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="lastName" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".lastName"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(2),
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".lastName"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                      minLength: "Must be at least 2 characters",
                      maxLength: "Must be 15 characters or less",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="phoneNum" md={2}>
                  Phone
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".phoneNum"
                    id="phoneNum"
                    name="phoneNum"
                    placeholder="Phone number"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(10),
                      maxLength: maxLength(15),
                      isNumber,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".phoneNum"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                      minLength: "Must be at least 10 numbers",
                      maxLength: "Must be 15 numbers or less",
                      isNumber: "Must be a number",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    validators={{
                      required,
                      validEmail,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Required",
                      validEmail: "Invalid email address",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 4, offset: 2 }}>
                  <div className="form-check">
                    <Label check>
                      <Control.checkbox
                        model=".agree"
                        name="agree"
                        className="form-check-input"
                      />{" "}
                      <strong>May we contact you?</strong>
                    </Label>
                  </div>
                </Col>
                <Col md={4}>
                  <Control.select
                    model=".contactType"
                    name="contactType"
                    className="form-control"
                  >
                    <option>By Phone</option>
                    <option>By Email</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="feedback" md={2}>
                  Your Feedback
                </Label>
                <Col md={10}>
                  <Control.textarea
                    model=".feedback"
                    id="feedback"
                    name="feedback"
                    rows="12"
                    className="form-control"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button
                    type="submit"
                    className="btn-outline-warning mt-3 mb-5"
                    color="#1d1d2c"
                  >
                    Send Feedback
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ContactPage;