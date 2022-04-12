import React, { useState } from "react";
import classnames from "classnames";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  TabPane,
  TabContent,
  NavLink,
  NavItem,
  Nav,
} from "reactstrap";

function ClassTabs() {
  // State for current active Tab
  const [currentActiveTab, setCurrentActiveTab] = useState("puppy");

  // Toggle active state for Tab
  const toggle = (tab) => {
    if (currentActiveTab !== tab) setCurrentActiveTab(tab);
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col col-md-8 col-lg-6 text-center">
          <h2 className="mb-2 mt-4">Class Descriptions</h2>

          <p className="mb-4">
            <span style={{ fontWeight: "300", fontSize: "medium" }}>
              The Kennel Club offers many different levels of obedience classes.
              Whether you want a well mannered house pet or a highly skilled
              competitor, we have the right class for you.
            </span>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Nav
            tabs
            className="justify-content-center mb-4"
            id="menuTabs"
            role="tablist"
          >
            <NavItem>
              <NavLink
                className={classnames({
                  active: currentActiveTab === "puppy",
                })}
                onClick={() => {
                  toggle("puppy");
                }}
              >
                Puppy
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({
                  active: currentActiveTab === "obedience",
                })}
                onClick={() => {
                  toggle("obedience");
                }}
              >
                Obedience
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({
                  active: currentActiveTab === "agility",
                })}
                onClick={() => {
                  toggle("agility");
                }}
              >
                Agility
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({
                  active: currentActiveTab === "scentwork",
                })}
                onClick={() => {
                  toggle("scentwork");
                }}
              >
                Scent Work
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({
                  active: currentActiveTab === "other",
                })}
                onClick={() => {
                  toggle("other");
                }}
              >
                Other
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <TabContent activeTab={currentActiveTab}>
            <TabPane tabId="puppy">
              <div className="card-deck justify-content-center">
                <Card className="mb-4 mx-auto mx-sm-3">
                  <CardImg
                    top
                    src="/assets/images/puppy-lab.jpg"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">AKC S.T.A.R. Puppy</CardTitle>
                    <CardText>
                      The AKC S.T.A.R. Puppy is an exciting program designed to
                      get dog owners and their puppies off to a good start.
                    </CardText>
                    <CardSubtitle className="text-muted small">
                      Recommended age: 8 weeks to 6 months.
                    </CardSubtitle>
                    <a
                      className="btn btn-outline-warning stretched-link"
                      href="/puppy-classes#akcstarpuppy"
                    >
                      Learn More
                    </a>
                  </CardBody>
                </Card>
                <Card className="mb-4 mx-auto mx-sm-3">
                  <CardImg
                    top
                    src="/assets/images/husky-treat.jpg"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Puppy Dynamics</CardTitle>
                    <CardText>
                      Designed to develop teamwork between dog and handler. This
                      class will review obedience skills learned in AKC S.T.A.R.
                      PUPPY class or other puppy class and will focus on
                      teaching teamwork and confidence building.
                    </CardText>
                    <CardSubtitle className="text-muted small">
                      Recommended age: Under 6 months.
                    </CardSubtitle>
                    <a
                      className="btn btn-outline-warning stretched-link"
                      href="/puppy-classes#puppydynamics"
                    >
                      Learn More
                    </a>
                  </CardBody>
                </Card>
              </div>
            </TabPane>

            <TabPane tabId="obedience">
              <div className="card-deck justify-content-center">
                <Card className="mb-4 mx-auto mx-sm-3">
                  <CardImg
                    top
                    src="/assets/images/02-Gus-BB-Comercial-cropped.jpg"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Beginners Obedience</CardTitle>
                    <CardText>
                      Continue to build on skills and relationships started in
                      previous puppy classes.Or introduce your dog to new
                      skills.
                    </CardText>
                    <CardSubtitle className="text-muted small">
                      Recommended age: 5 months or older.
                    </CardSubtitle>
                    <a
                      className="btn btn-outline-warning stretched-link"
                      href="/obedience-classes#beginners"
                    >
                      Learn More
                    </a>
                  </CardBody>
                </Card>
                <Card className="mb-4 mx-auto mx-sm-3">
                  <CardImg
                    top
                    src="/assets/images/Chewy-IMG_6820.jpg"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Basic Obedience</CardTitle>
                    <CardText>
                      Throughout the dog’s life the basic command of “come”,
                      “heel”, “sit” and “stay” are necessary to be well-behaved,
                      confident family member.
                    </CardText>
                    <CardSubtitle className="text-muted small">
                      Recommended age: 5 months or older.
                    </CardSubtitle>
                    <a
                      className="btn btn-outline-warning stretched-link"
                      href="/obedience-classes#basic"
                    >
                      Learn More
                    </a>
                  </CardBody>
                </Card>
                <Card className="mb-4 mx-auto mx-sm-3">
                  <CardImg
                    top
                    src="/assets/images/line-of-dogs.jpg"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Advanced Obedience</CardTitle>
                    <CardText>
                      Every dog can benefit from continued training. Young or
                      old you and your pet will improve their skills of come,
                      sit , down and stays.
                    </CardText>
                    <CardSubtitle className="text-muted small">
                      Recommended age: 6 months or older.
                    </CardSubtitle>
                    <a
                      className="btn btn-outline-warning stretched-link"
                      href="/obedience-classes#advanced"
                    >
                      Learn More
                    </a>
                  </CardBody>
                </Card>
                <Card className="mb-4 mx-auto mx-sm-3">
                  <CardImg
                    top
                    src="/assets/images/FPO-071021_NOC_68634-2.jpg"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Competition Obedience</CardTitle>
                    <CardText>
                      This class will focus on the advanced skills needed for
                      competitive Obedience.
                    </CardText>
                    <CardSubtitle className="text-muted small">
                      Recommended age: 6 months or older.
                    </CardSubtitle>
                    <a
                      className="btn btn-outline-warning stretched-link"
                      href="/obedience-classes#competition"
                    >
                      Learn More
                    </a>
                  </CardBody>
                </Card>
              </div>
            </TabPane>

            <TabPane tabId="agility">
              <div className="card-deck justify-content-center">
                <Card className="mb-4 mx-auto mx-sm-3">
                  <CardImg
                    top
                    src="/assets/images/agility.jpg"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Agility Classes</CardTitle>
                    <CardText>
                      Even if you don't recognize it by name, you have probably
                      seen an agility competition. Designed to demonstrate a
                      dog's willingness to work with his handler in a variety of
                      situations, agility is an athletic event that requires
                      conditioning, concentration, training, and teamwork.
                    </CardText>
                    <CardSubtitle className="text-muted small">
                      There are prerequisites and requirements to enroll in
                      Agility classes.
                    </CardSubtitle>
                    <a
                      className="btn btn-outline-warning stretched-link"
                      href="/agility-classes"
                    >
                      Learn More
                    </a>
                  </CardBody>
                </Card>
              </div>
            </TabPane>

            <TabPane tabId="scentwork">
              <div className="card-deck justify-content-center">
                <Card className="mb-4 mx-auto mx-sm-3">
                  <CardImg
                    top
                    src="/assets/images/scent-work-1.jpg"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Level 1 Foundation</CardTitle>
                    <CardText>
                      This class teaches the basics of how to handle oils,
                      making hides, and the basics of searching using birch.
                    </CardText>
                    <CardSubtitle className="text-muted small">
                      Recommendations: Dogs one year old or older. It is helpful
                      to have taken basic obedience classes prior to enrolling
                      in Scent Work.
                    </CardSubtitle>
                    <a
                      className="btn btn-outline-warning stretched-link"
                      href="/scentwork-classes#levelone"
                    >
                      Learn More
                    </a>
                  </CardBody>
                </Card>
                <Card className="mb-4 mx-auto mx-sm-3">
                  <CardImg
                    top
                    src="/assets/images/scent-work-2.jpg"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Level 2 Intro to Elements</CardTitle>
                    <CardText>
                      Applying the principles of Foundation, the team will learn
                      about Interiors, Exteriors, Containers, and Vehicles.
                    </CardText>
                    <CardSubtitle className="text-muted small">
                      Recommendations: Dogs one year old or older. It is helpful
                      to have taken basic obedience classes prior to enrolling
                      in Scent Work.
                    </CardSubtitle>
                    <a
                      className="btn btn-outline-warning stretched-link"
                      href="/scentwork-classes#leveltwo"
                    >
                      Learn More
                    </a>
                  </CardBody>
                </Card>
                <Card className="mb-4 mx-auto mx-sm-3">
                  <CardImg
                    top
                    src="/assets/images/scent-work-3.jpg"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Level 3 Competition</CardTitle>
                    <CardText>
                      The student will expand their skills in searching and
                      handling with the goal of successful competition. Dogs and
                      Handlers must be approved to enter this class.
                    </CardText>
                    <CardSubtitle className="text-muted small">
                      Recommendations: Dogs one year old or older. It is helpful
                      to have taken basic obedience classes prior to enrolling
                      in Scent Work.
                    </CardSubtitle>
                    <a
                      className="btn btn-outline-warning stretched-link"
                      href="/scentwork-classes#levelthree"
                    >
                      Learn More
                    </a>
                  </CardBody>
                </Card>
              </div>
            </TabPane>

            <TabPane tabId="other">
              <div className="card-deck justify-content-center">
                <Card className="mb-4 mx-auto mx-sm-3">
                  <CardImg
                    top
                    src="/assets/images/conformation-retriever.jpg"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Intro Rally</CardTitle>
                    <CardText>
                      A great option for training and bonding with your pet
                      after attending a puppy kindergarten or beginner level.
                      You develop improved teamwork while learning the sits,
                      turns, stands and stays to complete a Rally sign course.
                    </CardText>
                    <CardSubtitle className="text-muted small">
                      Recommended age: Over 6 months with some impulse control.
                      A sit and down with walking on leash helpful.
                    </CardSubtitle>
                    <a
                      className="btn btn-outline-warning stretched-link"
                      href="/rally-classes#intro"
                    >
                      Learn More
                    </a>
                  </CardBody>
                </Card>
                <Card className="mb-4 mx-auto mx-sm-3">
                  <CardImg
                    top
                    src="/assets/images/border-collie-competition.jpg"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Competitive Rally</CardTitle>
                    <CardText>
                      Once you have completed the Intro to Rally class or if you
                      have previously titled dog in Rally, you may move onto the
                      Competitive Rally Class.
                    </CardText>
                    <CardSubtitle className="text-muted small">
                      Recommended age: Over 6 months with some impulse control.
                      A sit and down with walking on leash helpful.
                    </CardSubtitle>
                    <a
                      className="btn btn-outline-warning stretched-link"
                      href="/rally-classes#competitive"
                    >
                      Learn More
                    </a>
                  </CardBody>
                </Card>
                <Card className="mb-4 mx-auto mx-sm-3">
                  <CardImg
                    top
                    src="/assets/images/conformation-1.jpg"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">Conformation</CardTitle>
                    <CardText>
                      A conformation class will prepare you and your dog for
                      your first experience – and for your best chances at
                      winning. Designed to prepare dogs and handlers for
                      competitive dog showing.
                    </CardText>
                    <CardSubtitle className="text-muted small">
                      Recommended age: 3 months.
                    </CardSubtitle>
                    <a
                      className="btn btn-outline-warning stretched-link"
                      href="/conformation"
                    >
                      Learn More
                    </a>
                  </CardBody>
                </Card>
              </div>
            </TabPane>
          </TabContent>
        </div>
      </div>
    </div>
  );
}

export default ClassTabs;
