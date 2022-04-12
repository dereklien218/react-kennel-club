import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Label,
  Col,
  Row,
  Container,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "reactstrap";
import { Link } from "react-router-dom";
import { Control, Form, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const isNumber = (val) => !isNaN(+val);
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "State",
      phoneNum: "",
      email: "",
      contactText: false,
      contactEmail: false,
      breed: "",
      sex: "Sex",
      dogName: "",
      age: "",
      goals: "",
      reactiveYes: false,
      reactiveNo: false,
      excusedYes: false,
      excusedNo: false,
      rallyBeginner: false,
      competitionUtility: false,
      advancedObedience: false,
      rallyCompetition: false,
      beginnerObedience: false,
      introTherapy: false,
      oldYes: false,
      oldNo: false,
      memberYes: false,
      memberNo: false,
      waiver: false,
      signature: "",
      touched: {
        firstName: false,
        lastName: false,
        address: false,
        city: false,
        phoneNum: false,
        email: false,
        dogName: false,
        age: false,
        goals: false,
        waiver: false,
        signature: false,
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  handleSubmit(values) {
    this.props.postRegistration(values);
    this.props.resetRegistrationForm();
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <header
          className="jumbotron-fluid parallax"
          style={{
            height: "500px",
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .3)), url(" +
              "assets/images/puppy-lab.jpg" +
              ")",
          }}
        >
          <div className="container h-100">
            <div className="row row-content justify-content-center h-100 align-items-center">
              <div className="col-10 col-md-8 col-lg-6 text-center">
                <h1
                  className="text-white"
                  style={{
                    fontWeight: "700",
                    fontFamily: "Playfair Display",
                    fontStyle: "normal",
                  }}
                >
                  Registration
                </h1>
              </div>
            </div>
          </div>
        </header>

        <Container fluid className="mt-3 pt-3 pb-5">
          <Row className="justify-content-center">
            <Col xs="10">
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link style={{ color: "#1e1e31" }} to="/home">
                    Home
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <Link style={{ color: "#1e1e31" }} to="/classes">
                    Classes
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>Registration</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col xs="10" md="8" lg="6" className="text-center">
              <h2>Class Registration Form</h2>

              <p className="subhead">
                This form is for class registration. You will need to pay
                nonrefundable class fees by the second week of class.
              </p>
            </Col>
          </Row>

          <div className="row row-content">
            <div className="col-12 text-center">
              <h4>Session 6, November 8 - December 16, 2021</h4>
              <hr />
            </div>
            <div className="col-md-10">
              <Form
                model="registrationForm"
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
                        required: "Please enter your first name",
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
                        required: "Please enter your last name",
                        minLength: "Must be at least 2 characters",
                        maxLength: "Must be 15 characters or less",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="address" md={2}>
                    Address
                  </Label>
                  <Col md={10}>
                    <Control.text
                      model=".address"
                      id="address"
                      name="address"
                      placeholder="Street Address"
                      className="form-control"
                      validators={{
                        required,
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".address"
                      show="touched"
                      component="div"
                      messages={{
                        required: "Please enter your address",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col xs={7} md={{ offset: 2 }}>
                    <Control.text
                      model=".city"
                      id="city"
                      name="city"
                      placeholder="City"
                      className="form-control"
                      validators={{
                        required,
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".city"
                      show="touched"
                      component="div"
                      messages={{
                        required: "Please enter your city",
                      }}
                    />
                  </Col>
                  <Col xs={5} md={3}>
                    <Control.select
                      model=".state"
                      name="state"
                      className="form-control"
                    >
                      <option disabled>State</option>
                      <option>Minnesota</option>
                      <option>North Dakota</option>
                    </Control.select>
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
                  <Col md={{ offset: 2, size: 10 }}>
                    How would you like to be contacted?
                    <div className="form-check">
                      <Label check>
                        <Control.checkbox
                          model=".contactText"
                          name="contactText"
                          className="form-check-input"
                        />{" "}
                        Text
                      </Label>
                    </div>
                    <div className="form-check">
                      <Label check>
                        <Control.checkbox
                          model=".contactEmail"
                          name="contactEmail"
                          className="form-check-input"
                        />{" "}
                        Email
                      </Label>
                    </div>
                  </Col>
                </Row>
                <hr />

                <Row className="form-group">
                  <Label htmlFor="yourDog" md={2}>
                    Your Dog
                  </Label>
                  <Col xs={7}>
                    <Control.text
                      model=".breed"
                      id="breed"
                      name="breed"
                      placeholder="Breed of Dog"
                      className="form-control"
                      validators={{
                        required,
                        minLength: minLength(2),
                        maxLength: maxLength(15),
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".breed"
                      show="touched"
                      component="div"
                      messages={{
                        required: "Required",
                        minLength: "Must be at least 2 characters",
                        maxLength: "Must be 15 characters or less",
                      }}
                    />
                  </Col>
                  <Col xs={5} md={3}>
                    <Control.select
                      model=".sex"
                      name="sex"
                      className="form-control"
                    >
                      <option disabled>Sex</option>
                      <option>Male</option>
                      <option>Female</option>
                    </Control.select>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col xs={7} md={{ offset: 2 }}>
                    <Control.text
                      model=".dogName"
                      id="dogName"
                      name="dogName"
                      placeholder="Dog Name"
                      className="form-control"
                      validators={{
                        required,
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".dogName"
                      show="touched"
                      component="div"
                      messages={{
                        required: "Please enter your dogs name",
                      }}
                    />
                  </Col>
                  <Col xs={5} md={3}>
                    <Control.text
                      model=".age"
                      id="age"
                      name="age"
                      placeholder="Age"
                      className="form-control"
                      validators={{
                        required,
                        isNumber,
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".age"
                      show="touched"
                      component="div"
                      messages={{
                        required: "How old is your dog?",
                        isNumber: "Must be a number",
                      }}
                    />
                  </Col>
                </Row>

                <Row className="form-group">
                  <Label htmlFor="goals" md={2}>
                    Goals
                  </Label>
                  <Col md={10}>
                    <Control.textarea
                      model=".goals"
                      id="goals"
                      name="goals"
                      rows="6"
                      className="form-control"
                      placeholder="What are your goals for your pet?"
                      validators={{
                        required,
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".goals"
                      show="touched"
                      component="div"
                      messages={{
                        required: "Please enter your goals for your dog",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="form-group">
                  <Label htmlFor="reactivity" md={2}>
                    Reactivity
                  </Label>
                  <Col>
                    Is your dog reactive?
                    <div className="form-radio ml-2">
                      <Label htmlFor="reactiveYes" check inline>
                        <Control.radio
                          model=".reactiveYes"
                          name="reactive"
                          value="yes"
                          className="form-radio-input"
                        />{" "}
                        Yes
                      </Label>
                    </div>
                    <div className="form-radio ml-2">
                      <Label htmlFor="reactiveNo" check inline>
                        <Control.radio
                          model=".reactiveNo"
                          name="reactive"
                          value="no"
                          className="form-radio-input"
                        />{" "}
                        No
                      </Label>
                    </div>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={{ offset: 2, size: 10 }}>
                    Has your dog ever been excused from any training facilities
                    for behavior?
                    <div className="form-radio ml-2">
                      <Label htmlFor="excusedYes" check inline>
                        <Control.radio
                          model=".excusedYes"
                          name="excused"
                          value="yes"
                          className="form-radio-input"
                        />{" "}
                        Yes
                      </Label>
                    </div>
                    <div className="form-radio ml-2">
                      <Label htmlFor="excusedNo" check inline>
                        <Control.radio
                          model=".excusedNo"
                          name="excused"
                          value="no"
                          className="form-radio-input"
                        />{" "}
                        No
                      </Label>
                    </div>
                  </Col>
                </Row>
                <hr />
                <Row className="form-group">
                  <Label htmlFor="classes" md={2}>
                    Classes
                  </Label>
                  <Col md={10}>
                    Select one class. For additional dogs start a new form.
                    <div className="form-radio ml-2">
                      <Label htmlFor="rallyBeginner" check inline>
                        <Control.radio
                          model=".rallyBeginner"
                          name="classRadio"
                          value="rallyBeginner"
                          className="form-radio-input"
                        />{" "}
                        Rally Beginner Monday Noon - 1 p.m. (3 remaining)
                      </Label>
                    </div>
                    <div className="form-radio ml-2">
                      <Label
                        htmlFor="competitionUtility"
                        check
                        inline
                        className="text-muted"
                      >
                        <Control.radio
                          model=".competitionUtility"
                          name="classRadio"
                          value="competitionUtility"
                          className="form-radio-input"
                          disabled
                        />{" "}
                        Competition Utility Tuesday 5:30 - 6:30 p.m. (0
                        remaining)
                      </Label>
                    </div>
                    <div className="form-radio ml-2">
                      <Label htmlFor="advancedObedience" check inline>
                        <Control.radio
                          model=".advancedObedience"
                          name="classRadio"
                          value="advancedObedience"
                          className="form-radio-input"
                        />{" "}
                        Advanced Obedience Tuesday 6:45 - 7:30 p.m. (4
                        remaining)
                      </Label>
                    </div>
                    <div className="form-radio ml-2">
                      <Label htmlFor="rallyCompetition" check inline>
                        <Control.radio
                          model=".rallyCompetition"
                          name="classRadio"
                          value="rallyCompetition"
                          className="form-radio-input"
                        />{" "}
                        Rally Competition Wednesday 5:30 - 6:30 p.m. (3
                        remaining)
                      </Label>
                    </div>
                    <div className="form-radio ml-2">
                      <Label htmlFor="beginnerObedience" check inline>
                        <Control.radio
                          model=".beginnerObedience"
                          name="classRadio"
                          value="beginnerObedience"
                          className="form-radio-input"
                        />{" "}
                        Beginner Obedience Thursday 5:30 - 6:30 p.m. (2
                        remaining)
                      </Label>
                    </div>
                    <div className="form-radio ml-2">
                      <Label
                        htmlFor="introTherapy"
                        check
                        inline
                        className="text-muted"
                      >
                        <Control.radio
                          model=".introTherapy"
                          name="classRadio"
                          value="introTherapy"
                          className="form-radio-input"
                          disabled
                        />{" "}
                        Intro to CGC and Therapy Dog Thursday 8 - 8:45 p.m. (0
                        remaining)
                      </Label>
                    </div>
                  </Col>
                </Row>
                <hr />
                <Row className="form-group">
                  <Label htmlFor="classes" md={2}>
                    Consent
                  </Label>
                  <Col md={10}>
                    Is the person handling the dog in class 18 years or older?
                    <div className="form-radio ml-2">
                      <Label htmlFor="oldYes" check inline>
                        <Control.radio
                          model=".oldYes"
                          name="ageRadio"
                          value="oldYes"
                          className="form-radio-input"
                        />{" "}
                        Yes
                      </Label>
                    </div>
                    <div className="form-radio ml-2">
                      <Label htmlFor="oldNo" check inline>
                        <Control.radio
                          model=".oldNo"
                          name="ageRadio"
                          value="oldNo"
                          className="form-radio-input"
                        />{" "}
                        No
                      </Label>
                    </div>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={{ offset: 2, size: 10 }}>
                    Are you an FMKC member?
                    <div className="form-radio ml-2">
                      <Label htmlFor="memberYes" check inline>
                        <Control.radio
                          model=".memberYes"
                          name="memberRadio"
                          value="memberYes"
                          className="form-radio-input"
                        />{" "}
                        Yes
                      </Label>
                    </div>
                    <div className="form-radio ml-2">
                      <Label htmlFor="memberNo" check inline>
                        <Control.radio
                          model=".memberNo"
                          name="memberRadio"
                          value="memberNo"
                          className="form-radio-input"
                        />{" "}
                        No
                      </Label>
                    </div>
                  </Col>
                </Row>
                <Row className="form-group">
                  <Col md={{ offset: 2, size: 10 }}>
                    <div className="form-check ml-2">
                      <Label htmlFor="waiver" check inline>
                        <Control.checkbox
                          model=".waiver"
                          name="waiver"
                          className="form-check-input"
                        />{" "}
                        I have read and agree with Fargo Moorhead Kennel Club
                        Waiver of Liablity and Informed Consent COVID-19 Waiver.
                        All statements and questions by answered by me are true.
                      </Label>
                      <Button
                        color="info"
                        size="sm"
                        className="btn-small mt-2"
                        onClick={this.toggleModal}
                      >
                        Waiver and Consent
                      </Button>
                    </div>
                  </Col>
                </Row>
                <div className="container">
                  <Modal
                    isOpen={this.state.isModalOpen}
                    toggle={this.toggleModal}
                  >
                    <ModalHeader charCode="X" toggle={this.toggleModal}>
                      <h5 className="modalTitle" id="staticBackdropLabel">
                        Waiver of Liability and Informed Consent COVID-19 Waiver
                      </h5>
                    </ModalHeader>
                    <ModalBody>
                      <p>
                        LIABILITY WAIVER: On behalf of myself, my heirs,
                        executors, administrators and assignees: I hereby waive
                        and release any and all rights and claims for damages
                        which I may have against the Fargo-Moorhead Club, its
                        Board of Directors, Officers, Members, Training Director
                        and Training Staff, as well as any others connected with
                        this class or event, their heirs, executors,
                        administrators, successors, and assignees for any and
                        all injuries which I and/or any member of my family
                        and/or friends, or my dog may suffer or cause while
                        taking part in this class or event or as a result
                        thereof. I consent that photographs taken while involved
                        in Fargo-Moorhead Kennel Club activities may be used or
                        reproduced by the Fargo-Moorhead Kennel Club for
                        educational promotional purposes, including news media
                        and publications.
                      </p>

                      <p>
                        Hereafter, the American Kennel Club will be referred to
                        as AKC <br />
                        Hereafter, Fargo-Moorhead Kennel Club, Fargo, ND will be
                        referred to as Site <br />
                        Hereafter, Fargo-Moorhead Kennel Club (FMKC) will be
                        referred to as Club
                      </p>

                      <p>
                        I attest that to the best of my knowledge, I do not have
                        COVID-19 at the time of attending this event, and I
                        understand the risks of unknown exposure to this and
                        other illnesses by or to myself, my family, other
                        participants, and third parties. I have not been tested
                        and found positive; am not waiting for test results; and
                        do not have any symptoms. I agree that I will not
                        knowingly expose others to any illness I may have or be
                        at risk to have. I will follow all Club rules and
                        requirements to reduce any exposure and possibility of
                        contracting or spreading the virus. I will also fully
                        cooperate with and follow any City, County, and/or State
                        guidelines that have jurisdiction in the area in which
                        the event is taking place. If any of the above should
                        change prior to my arrival at the trial site or during
                        the completion of the event that is the subject of this
                        consent, I will inform the Club and proceed accordingly
                        in light of the new information.
                      </p>
                      <p>
                        I agree that I am attending this Club event entirely at
                        my own risk and assume all risk and full responsibility
                        for my own health, wellbeing, and safety during this
                        class or event. I fully agree that the Club, their
                        owners/board members, employees, assistants, and
                        volunteers are in no way liable for any present or
                        future COVID-19 exposure incurred at any time by any
                        person, in attendance or not in attendance, during of
                        after this event. I hereby waive and release the Site,
                        and Club, the owners/board members, employees,
                        assistants, and volunteers from any and all liability
                        for damages or personal injury to me, my dogs, or my
                        property.
                      </p>
                      <p>
                        Further, I hereby indemnify and hold harmless the Site,
                        and the Club, their owners/board members, employees,
                        assistants and volunteers from any and all claims by or
                        liability to any third party arising out of my
                        participation in the Site and Club event. Any liability
                        to anyone for any incident involving myself, the
                        location, or those pets or actions of other participants
                        and spectators will be my sole responsibility and I
                        assume all financial liability and will also assume all
                        and any financial costs associated with my actions.
                      </p>
                      <p>
                        PARENTS ARE RESPONSIBLE FOR THE SUPERVISION OF ANY
                        CHILDREN IN ATTENDANCE DURING TRAINING CLASSES. CHILDREN
                        ARE WELCOME TO ATTEND BUT MUST REMAIN SEATED IN THE
                        SEATING AREA.
                      </p>
                    </ModalBody>
                    <ModalFooter>
                      <Button onClick={this.toggleModal}>Close</Button>
                    </ModalFooter>
                  </Modal>
                </div>

                <Row className="form-group">
                  <Label htmlFor="signature" md={2}>
                    Signature
                  </Label>
                  <Col md={10}>
                    <Control.text
                      model=".signature"
                      id="signature"
                      name="signature"
                      placeholder="Type your name"
                      className="form-control"
                      validators={{
                        required,
                      }}
                    />
                    <Errors
                      className="text-danger"
                      model=".signature"
                      show="touched"
                      component="div"
                      messages={{
                        required: "Please type your name.",
                      }}
                    />
                  </Col>
                </Row>

                <Row className="form-group">
                  <Col md={{ size: 10, offset: 2 }}>
                    <Button type="submit" color="outline-warning">
                      Register
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default Register;
